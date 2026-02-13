import{j as r}from"./iframe-C2cGCWBO.js";import{B as o}from"./Button-B41LUuF3.js";import{A as l}from"./ActionGroup-CWoZwwxK.js";import{L as s,a as d}from"./LightBox-5Sm2SR4U.js";import{I as m}from"./Image-BNktgY0S.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-C4LD0r9W.js";import"./flowComponent-C6jxxEVz.js";import{u as h}from"./useOverlayController-CtyPLm8k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./utils-CPzpSZL2.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./LoadingSpinner-DIaaAh-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./context-2EfdQWx2.js";import"./remote-w8RrxnGT.js";import"./Button-BneP87GG.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BrmD8Kf2.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./dynamic-DhyEqTLI.js";import"./getActionGroupSlot-C9frEoU7.js";import"./useStatic-DUMwmPN3.js";import"./OverlayTrigger-C08PeZoT.js";import"./Dialog-BW6BpcVd.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./OverlayContextProvider-BBwaePGz.js";import"./DialogTriggerView-CAilZ6MB.js";import"./Overlay-BChO2yc4.js";import"./DivView-Bf1iqhjF.js";import"./ButtonView-Bho7TPlx.js";const jr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,fr as __namedExportsOrder,jr as default};
