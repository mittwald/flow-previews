import{j as r}from"./iframe-CqRNQciv.js";import{B as o}from"./Button-BQVO0si3.js";import{A as T}from"./ActionGroup-Df_0kbWt.js";import{L as s,a as y}from"./LightBox-CK4ORouQ.js";import{I as m}from"./Image-BMEGxR64.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-Byt1rMjk.js";import{u as w}from"./DialogTriggerView-BgdRS1kA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./Text-BmM8CnJX.js";import"./browser-DF98vWDx.js";import"./EmulatedBoldText-Dxetj7v-.js";import"./Text-DPg2upf1.js";import"./utils-CDZvBAhZ.js";import"./LoadingSpinner-B7q__8zb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./context-DEliiBST.js";import"./Button-Cp6wFlJh.js";import"./ProgressBar-BcNp5lkE.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B8y4VsiL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Qa0Hjq2B.js";import"./useFocus-C23Lw-eJ.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocusable-Bbxq5z2c.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CoRCewfO.js";import"./useStatic-DY1i4yNR.js";import"./Overlay-BwNeueP1.js";import"./Dialog-D7VtK-4A.js";import"./RSPContexts-Cux7rZ-z.js";import"./OverlayArrow-DyqT2ErN.js";import"./useControlledState-CM_u9bSJ.js";import"./Collection-p1kezi7h.js";import"./CollectionBuilder-C5f-xul0.js";import"./Separator-DooYmmOD.js";import"./Group-BjCh3wTR.js";import"./SearchField-CmWplFkj.js";import"./FieldError-DSIOhjbk.js";import"./Form-B_ua98af.js";import"./useTextField-mA3ppTq3.js";import"./useFormReset-1xQ2Hjo2.js";import"./TextField-Bz3Bvh6E.js";import"./useEvent-QhZz2GUM.js";import"./SelectionManager-BZWRaM2c.js";import"./useCollator-DR7vJXcv.js";import"./FocusScope-1rZ1gxhZ.js";import"./VisuallyHidden-CgIcH36Q.js";import"./ButtonView-DIYvBP4u.js";import"./context-BVMhSMnq.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
