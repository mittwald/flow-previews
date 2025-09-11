import{j as r}from"./iframe-DvGStSYQ.js";import{B as o}from"./Button-DjKTL3-y.js";import{A as T}from"./ActionGroup-CLN8qYWf.js";import{L as s,a as y}from"./LightBox-CPjxtuwP.js";import{I as m}from"./Image-Dq6nOQL3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-PCMncW0h.js";import{u as w}from"./DialogTriggerView-BbgRv1Oa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./Text-aqY_knFC.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./Text-C8nQapVu.js";import"./utils-BfKSOXmh.js";import"./LoadingSpinner-KPhGKvxN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./context-AtsIIwtl.js";import"./Button-BSYAfZ7k.js";import"./ProgressBar-BElErXd2.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-pezwcoCn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-i0ws38c9.js";import"./useFocus-Dk72H1bO.js";import"./useFocusRing-ldGrbWty.js";import"./useFocusable-51csEq1k.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-S1WVYHYX.js";import"./useStatic-DiIM3txy.js";import"./Overlay-Dbp-_jzd.js";import"./Dialog-CYVeUmsI.js";import"./RSPContexts-Dwdml_ht.js";import"./OverlayArrow-Cm-qLoTT.js";import"./useControlledState-BCrcM4bM.js";import"./Collection-C-BG6Vrm.js";import"./CollectionBuilder-DHXYJDan.js";import"./Separator-dZEiMybe.js";import"./Group-BlAVBLoF.js";import"./SearchField-BP1Cyyuc.js";import"./FieldError-Cv8C3-Ec.js";import"./Form-BeVzvFPG.js";import"./useTextField-Su4XsVqq.js";import"./useFormReset-CpcIO9Ob.js";import"./TextField-DaGxzBCI.js";import"./useEvent-P2zKSTCT.js";import"./SelectionManager-CRcC2iB_.js";import"./useCollator-CtQygjZr.js";import"./FocusScope-Dv52udGl.js";import"./VisuallyHidden-BQiIpSgJ.js";import"./ButtonView-DvuJFS4m.js";import"./context-Cq3VHa6C.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
