import{j as r}from"./iframe-PZSwL5UI.js";import{B as o}from"./Button-Dx8ytIXV.js";import{A as l}from"./ActionGroup-CuC620Qy.js";import{L as s,a as d}from"./LightBox-B4RXFQAc.js";import{I as m}from"./Image-CBAsRPIp.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-Brl3hUMe.js";import"./flowComponent-B2U-3AiS.js";import{u as h}from"./useOverlayController-BVZAJrcY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./utils-lOj21ZD_.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./LoadingSpinner-kHlSwNnH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./remote-mdYu2fN6.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./dynamic-DDVyub9n.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./useStatic-Bw6k9Sf5.js";import"./OverlayTrigger-w9ToWuXF.js";import"./Dialog-BxivZnjn.js";import"./RSPContexts-TcotrMre.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./DialogTriggerView-Bw9FK_tO.js";import"./Overlay-DZSkN4bv.js";import"./ButtonView-XkIAqQ4n.js";const Br={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("LightBox");
    return <>
        <Button onPress={controller.open}>Open LightBox</Button>
        <LightBox {...props} controller={controller}>
          <Image src={dummyText.imageSrc} />
          <ActionGroup>
            <Button>
              <IconDownload />
            </Button>
            <Button>
              <IconDelete />
            </Button>
          </ActionGroup>
        </LightBox>
      </>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...n.parameters?.docs?.source}}};const jr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,jr as __namedExportsOrder,Br as default};
