import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-n-xcLTj3.js";import{B as o}from"./Button-Dhpj9FRh.js";import{A as T}from"./ActionGroup-CSzbvW_E.js";import{L as s,a as w}from"./LightBox-C8SgfaP3.js";import{I as m}from"./Image-Cwimt9gX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{w as y,x as G}from"./IconWarning-BT9Vk3ZR.js";import{u as O}from"./OverlayTrigger-CPKfF4Tt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./Text-CvWN1dQn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";import"./utils-CHEN54dH.js";import"./LoadingSpinner-V_OKVJm3.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-huFUK6tI.js";import"./useStatic-bVMyw5l7.js";import"./Dialog-DMm5cJWQ.js";import"./RSPContexts-DXggXklQ.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./useControlledState-B6lyO5nT.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./useCollator-DYp7eA3k.js";import"./FocusScope-VprgOmaE.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./Overlay-C_RjYwGb.js";import"./context-ah73-6JJ.js";const Gr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(w,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(y,{})}),r.jsx(o,{children:r.jsx(G,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=O("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(y,{})}),r.jsx(o,{children:r.jsx(G,{})})]})]})]})}},n={render:()=>r.jsxs(w,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Or=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Or as __namedExportsOrder,Gr as default};
