import{j as r}from"./iframe-D3NxpU8u.js";import{B as o}from"./Button-edx4tjlA.js";import{A as l}from"./ActionGroup-BiPDUCFA.js";import{L as s,a as d}from"./LightBox-CG9C-KYS.js";import{I as m}from"./Image-u72nW70a.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-CbcK8G8M.js";import{u as h}from"./useOverlayController-lbjW1yTF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./index-A0HM7_1k.js";import"./Text-D1hVvtRE.js";import"./browser-_fqBbauj.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./Text-ChwArYoy.js";import"./utils-C5WN15Gt.js";import"./LoadingSpinner-D_HEbJEf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./context-CgVi_M53.js";import"./remote-Cz3kT78_.js";import"./Button-BOXTMksI.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./dynamic-Cp5s9Mjb.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./useStatic-Cxgn0lDK.js";import"./OverlayTrigger-BzsNNahf.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./context-BviD8e-k.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./DialogTriggerView-DGdEuC_1.js";import"./Overlay-BsxDEKI2.js";import"./DivView-CNi80n9a.js";import"./ButtonView-D-stYF68.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Lr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Lr as __namedExportsOrder,fr as default};
