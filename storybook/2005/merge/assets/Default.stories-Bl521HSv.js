import{j as r}from"./iframe-CIFTXvjr.js";import{B as o}from"./Button-mCzyv81-.js";import{A as T}from"./ActionGroup-DwR_jXyX.js";import{L as s,a as y}from"./LightBox-JZnfgaUk.js";import{I as m}from"./Image-D0EGEArU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-DOS6fKaS.js";import{u as w}from"./DialogTriggerView-DF7dHF7c.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./Text-B8fPWk55.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";import"./Text-BPQdMqSt.js";import"./utils-B5Zvs6iw.js";import"./LoadingSpinner-DoTPzDls.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./context-CJ6VsYI4.js";import"./Button-4h-pZrvY.js";import"./ProgressBar-CDKMY4TF.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-8HeaTLIH.js";import"./useFocus-D52c6dYL.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";import"./dynamic-CQYecVWB.js";import"./getActionGroupSlot-BxRP9D0M.js";import"./useStatic-DkYuQJEv.js";import"./Overlay-DfcG1mbK.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./useControlledState-D08Ut7L5.js";import"./ButtonView-CIVunr8-.js";import"./context-u0ncZylp.js";import"./RSPContexts-BLper1Pa.js";import"./FocusScope-CdIx8Nbp.js";import"./useCollator-BEuuda2G.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./Collection-B0Ce4Su5.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Separator-DlHAiOK1.js";import"./Group-Hjqv-RBg.js";import"./SearchField-CS1y3jZ7.js";import"./FieldError-CLAhwXWc.js";import"./Form-OgeH3cHd.js";import"./useTextField-B5q8s_6j.js";import"./useFormReset-Bo2I_rci.js";import"./TextField-DRuiN1lA.js";import"./useEvent-Kc6oznrN.js";import"./SelectionManager-B7qXDdFd.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var L,S,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
