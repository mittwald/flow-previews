import{j as r}from"./iframe-je41IZNf.js";import{B as o}from"./Button-CKqcv5FO.js";import{A as l}from"./ActionGroup-rchol9jY.js";import{L as s,a as d}from"./LightBox-DDHdTNFZ.js";import{I as m}from"./Image-CBQEKvMd.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-Bnxn-M7Y.js";import"./flowComponent-Byg_Wdja.js";import{u as h}from"./useOverlayController-BUOVgKeB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-BC-RZ7k4.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./utils-Q4wA2zXG.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./LoadingSpinner-DltTQrQc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./remote-CVh73cse.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcrJWT2n.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./dynamic-BrtagzWP.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./useStatic-DB-qeJ4V.js";import"./OverlayTrigger-Bv_i_Yla.js";import"./Dialog-BA8GDzQ6.js";import"./RSPContexts-u6z1ubPU.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./DialogTriggerView-hRXK0JzE.js";import"./Overlay-B0VzEzJb.js";import"./DivView-BiUFs-Er.js";import"./ButtonView-Dl5Y4ZWm.js";const jr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
