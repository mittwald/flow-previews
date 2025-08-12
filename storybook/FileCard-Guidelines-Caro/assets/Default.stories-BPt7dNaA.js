import{j as r}from"./iframe-BDw0JWSR.js";import{B as o}from"./Button-yu20EEPl.js";import{A as T}from"./ActionGroup-DK1GcaEq.js";import{L as s,a as y}from"./LightBox--0fl1o3i.js";import{I as m}from"./Image-BNsNxnxl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-C4ko8TBx.js";import{u as w}from"./DialogTriggerView-5dEI7enB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./Text-BXVMRRcn.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";import"./Text-DEFEolTP.js";import"./utils-D_w6CRD2.js";import"./LoadingSpinner-CFe72iUG.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./context-D5nQNM7t.js";import"./Button-lKZFx-Lr.js";import"./ProgressBar-CyYOn_uf.js";import"./Label-CUqrwqQ8.js";import"./Hidden-pH7w6Mtj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C5kEgDfJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BNZPQqcG.js";import"./useFocus-Dj2Ek65f.js";import"./useFocusRing-52GqPzGX.js";import"./useFocusable-D3-cRXek.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CeAfv5DI.js";import"./useStatic-D7eirymu.js";import"./Overlay-BRhvQYut.js";import"./Dialog-D8b2kpaQ.js";import"./RSPContexts-0zkktiyR.js";import"./OverlayArrow-CwRuRLsS.js";import"./useControlledState-Cvl_BVXS.js";import"./Collection-DDNNYOGK.js";import"./CollectionBuilder-DuESWRb0.js";import"./Separator-Cydo87Fk.js";import"./Group-CKyiWQ2U.js";import"./SearchField-DqNeviEu.js";import"./FieldError-ByToyRq3.js";import"./Form-Q2KPI748.js";import"./useTextField-qrm6HsnU.js";import"./useFormReset-JMYigv_3.js";import"./TextField-DXLuZ0kd.js";import"./useEvent-Cw4Az-S_.js";import"./SelectionManager-CoRWAbK4.js";import"./useCollator-DLoPjsqn.js";import"./FocusScope-CC9BsQaO.js";import"./VisuallyHidden-BSZ5GesV.js";import"./DivView-DJLNBJ4M.js";import"./ButtonView-D2cB3Af-.js";import"./context-DDduvggu.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
