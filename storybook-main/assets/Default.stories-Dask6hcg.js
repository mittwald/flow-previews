import{j as r}from"./iframe-B8noCUnE.js";import{B as o}from"./Button-B3YMBdra.js";import{A as T}from"./ActionGroup-CbboRKI6.js";import{L as s,a as y}from"./LightBox-CM0A53NF.js";import{I as m}from"./Image-CPlfo7gp.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CGV_Yvrm.js";import{u as w}from"./DialogTriggerView-CaeQRtG8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./Text-Da5wEoPX.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";import"./Text-C0NfSVbg.js";import"./utils-DycHSEAg.js";import"./LoadingSpinner-a5nWuss2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./context-Co6CbP9u.js";import"./Button-CwMP1veT.js";import"./ProgressBar-7N6gfaNO.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CluaPz9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGDWDrJK.js";import"./useFocus-DSdjnAxu.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocusable-CKRftzjl.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CuZ7B-dR.js";import"./useStatic-D8Kg3g-R.js";import"./Overlay-CmxAjurx.js";import"./Dialog-gc4bcspb.js";import"./RSPContexts-CYAtt9lw.js";import"./OverlayArrow-CUBciziX.js";import"./useControlledState-Dup9xG7O.js";import"./Collection-B6gzk5_Q.js";import"./CollectionBuilder-DiBm4MiM.js";import"./Separator-BwYsz5vJ.js";import"./Group-B5h_0xpF.js";import"./SearchField-gENajJ8Y.js";import"./FieldError-DD6GhKc_.js";import"./Form-BoGb9d1y.js";import"./useTextField-BKrTYTzq.js";import"./useFormReset-BTHbcpmM.js";import"./TextField-IVl1Cmgq.js";import"./useEvent-Y0Lkcg6v.js";import"./SelectionManager-D_SvmIZH.js";import"./useCollator-CP4AKmd0.js";import"./FocusScope-b3Inwx6M.js";import"./VisuallyHidden-Dp1jIams.js";import"./ButtonView-DssAJAGf.js";import"./context-BJExLDeV.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
