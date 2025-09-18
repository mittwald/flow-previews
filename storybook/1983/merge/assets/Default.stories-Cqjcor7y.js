import{j as r}from"./iframe-DUtcAVii.js";import{B as o}from"./Button-DULuqu_l.js";import{A as T}from"./ActionGroup-DzQEgvAL.js";import{L as s,a as y}from"./LightBox-BPV3yJH0.js";import{I as m}from"./Image-DqM3wZIz.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BDc9REUs.js";import{u as w}from"./DialogTriggerView-D0BwiIeE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./Text-CIiZgPf0.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Text-DD2-gbIJ.js";import"./utils-BJK0bMVs.js";import"./LoadingSpinner-3c39ELf0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./context-DAjKPHt4.js";import"./Button-2XgEXCNC.js";import"./ProgressBar-DzueJvvV.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbIX1hOn.js";import"./useFocus-BBGclxaJ.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./dynamic-BPQY4zlZ.js";import"./getActionGroupSlot-CSj3Q-Jf.js";import"./useStatic-BRK6B1ib.js";import"./Overlay-D-jtCfan.js";import"./ClearPropsContextView-CAu383Hu.js";import"./useControlledState-G4tJUSCb.js";import"./ButtonView-C3pXxpNT.js";import"./context-DAzA1DTj.js";import"./RSPContexts-DD7I-zbI.js";import"./FocusScope-Bx_BpPkG.js";import"./useCollator-BJahqQL5.js";import"./VisuallyHidden-CsqdnZMW.js";import"./Collection-YnS658O_.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Separator-DNulUYCD.js";import"./Group-QAGn5nhU.js";import"./SearchField-6u-M9e2f.js";import"./FieldError-B_KU3Njk.js";import"./Form-pelauJUP.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./TextField-w7amMjDR.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
