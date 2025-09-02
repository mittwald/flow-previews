import{j as r}from"./iframe-DaUAgimo.js";import{B as o}from"./Button-BNJyR7fn.js";import{A as T}from"./ActionGroup-DCIqMTyH.js";import{L as s,a as y}from"./LightBox-B_OYLQjl.js";import{I as m}from"./Image-CC_LKAf0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a8 as O}from"./IconWarning-Jl_pbRrq.js";import{u as w}from"./DialogTriggerView-CgOUSRTq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./Text-DqLl2XlR.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Text-DKL0uLiC.js";import"./utils-Dv3HAiNW.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./context-DGmQszzG.js";import"./Button-CD_lBn7X.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-4W4rDaLN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEu6_Qu_.js";import"./useFocus-DfmeJaC9.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./useStatic-Djoi-J49.js";import"./Overlay-Zw5HUzRd.js";import"./Dialog-CaJ4kRlO.js";import"./RSPContexts-GpjylgJ9.js";import"./OverlayArrow-De5g7eHd.js";import"./useControlledState-HXI1EgZM.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./Group-D-iHY_KE.js";import"./SearchField-De9Vc972.js";import"./FieldError-CBWJBmz-.js";import"./Form-StxO2YAG.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./TextField-Cz-3i59y.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./useCollator-CI-kdhZu.js";import"./FocusScope-Gc7sAVxN.js";import"./VisuallyHidden-BnUSGmEW.js";import"./ButtonView-B6NoEu3U.js";import"./context-C_g0dLJp.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
