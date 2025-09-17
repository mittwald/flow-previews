import{j as r}from"./iframe-Fj9rH4cM.js";import{B as o}from"./Button-CRDs1G82.js";import{A as T}from"./ActionGroup-BDPADmmw.js";import{L as s,a as y}from"./LightBox-DrL5LJgv.js";import{I as m}from"./Image-BVFL_vWl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BqHcxRer.js";import{u as w}from"./DialogTriggerView-cCV2n8WK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./Text-CY4-u4so.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Text-DCFUXQ-H.js";import"./utils-1iPQLSxY.js";import"./LoadingSpinner-CK8GFOt2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./context-qP4IgOj6.js";import"./Button-ClJ-El1M.js";import"./ProgressBar-BwsJFvfU.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C-3cKpbA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXUdxwPb.js";import"./useFocus-7HBUp4O0.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocusable-DA60a4RB.js";import"./dynamic-BaCFTb0P.js";import"./getActionGroupSlot-DSTuqm6f.js";import"./useStatic-g6Dny9ho.js";import"./Overlay-HaHYnsf6.js";import"./OverlayArrow-DopxGRGn.js";import"./useControlledState-DkD4o1Gz.js";import"./ButtonView-BE_aIrSg.js";import"./context-qzo6W5cX.js";import"./RSPContexts-CZftLSNz.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./VisuallyHidden-6EX0wPu2.js";import"./Collection-DVpJlKDB.js";import"./CollectionBuilder-82bN8UBR.js";import"./Separator-B_gkWTuC.js";import"./Group-DdYjb3kh.js";import"./SearchField-DV7b6fGA.js";import"./FieldError-Dx-XJATE.js";import"./Form-OtjI-dAW.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./TextField-HFN8OYQm.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
