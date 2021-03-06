import { ResponsivePie } from '@nivo/pie'

const ContinentPie = ({ Europe, Asia, Africa, Oceania, NorthAmerica, SouthAmerica, CentralAmerica}) => (
    <ResponsivePie
        data={
            [
            {
                "id": "Europe",
                "label": "Europe",
                "value": `${Europe}`,
                "color": "hsl(341, 70%, 50%)"
            },
            {
                "id": "Asia",
                "label": "Asia",
                "value": `${Asia}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "Africa",
                "label": "Africa",
                "value": `${Africa}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "Oceania",
                "label": "Oceania",
                "value": `${Oceania}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "North America",
                "label": "North America",
                "value": `${NorthAmerica}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "South America",
                "label": "South America",
                "value": `${SouthAmerica}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "Central America",
                "label": "Central America",
                "value": `${CentralAmerica}`,
                "color": "hsl(52, 70%, 50%)"
            },
            ]
            
        }
        margin={{ top: -60, right: 80, bottom: 150, left: 120 }}
        valueFormat=" >-.0%"
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'green_blue' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: -180,
                translateY: 78,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 22,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default ContinentPie
