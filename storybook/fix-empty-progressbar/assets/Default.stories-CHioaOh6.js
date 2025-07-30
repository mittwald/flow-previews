import{j as r}from"./iframe-DJR6bG_N.js";import{B as o}from"./Button-BcHxSHOm.js";import{A as T}from"./ActionGroup-BilcVCQi.js";import{L as s,a as y}from"./LightBox-DEKO-8Ie.js";import{I as m}from"./Image-AeQECv6Q.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-TBIhG4gU.js";import{u as w}from"./DialogTriggerView-DkospgpI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BL9cdq29.js";import"./mergeRefs-Hpx63azc.js";import"./index-C22qm2g8.js";import"./Text-CxYW3yHX.js";import"./browser-B_AF4VAW.js";import"./EmulatedBoldText-DOjRM7Xy.js";import"./Text-BqN-_O45.js";import"./utils-DRP6LXVD.js";import"./LoadingSpinner-BP8XYJb-.js";import"./useLocalizedStringFormatter-DqMJYvZV.js";import"./context-DgBdWYay.js";import"./Button-C47dkwdH.js";import"./ProgressBar-B9rixrKR.js";import"./Label-sZvCZMuk.js";import"./Hidden-BHSOAXCo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DhfP4m7A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnK8r-az.js";import"./useFocus-BcpzqQNe.js";import"./useFocusRing-CfOOnzfL.js";import"./useFocusable-BEA6ccjd.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CudkwBxb.js";import"./useStatic-CIf-dq2E.js";import"./Overlay-BYA03Cp1.js";import"./Dialog-B2WyxH4W.js";import"./RSPContexts-DiuHitS7.js";import"./OverlayArrow-Dty9UTNu.js";import"./useControlledState-CYpB0MkV.js";import"./Collection-Bn5uLIdX.js";import"./CollectionBuilder-Kei65M9q.js";import"./Separator-43LoEa0E.js";import"./Group-CE0iASVZ.js";import"./SearchField-CR0mUJzd.js";import"./FieldError-Cb0gzYqD.js";import"./Form-BkELhqZm.js";import"./useTextField-CXWfURMQ.js";import"./useFormReset-DJO_Tyel.js";import"./TextField-CZNDqobz.js";import"./useEvent-SSoNVoxa.js";import"./SelectionManager-DV-un0OH.js";import"./useCollator-CQl6CZ5b.js";import"./FocusScope-nXLL4j6O.js";import"./VisuallyHidden-Capsm3hZ.js";import"./DivView-BGza0U0W.js";import"./ButtonView-DrQygQjN.js";import"./context-tBw8Lqjb.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
