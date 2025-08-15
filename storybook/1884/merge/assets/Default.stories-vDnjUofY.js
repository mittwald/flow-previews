import{j as r}from"./iframe-Cnqm4lFy.js";import{B as o}from"./Button-GqX5Ed_0.js";import{A as T}from"./ActionGroup-Bl2vI95-.js";import{L as s,a as y}from"./LightBox-CRJUwOCy.js";import{I as m}from"./Image-DLdD0OhA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BGJHeHvx.js";import{u as w}from"./DialogTriggerView-DiXTTJbN.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./Text-BEWqZmc4.js";import"./browser-B2d62Nc4.js";import"./EmulatedBoldText-DcBlvLGt.js";import"./Text-CzkkWfVE.js";import"./utils-CnzLW3AP.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./context-CV4GK-7T.js";import"./Button-IuJiQec9.js";import"./ProgressBar-DvnI1q4y.js";import"./Label-DR_AMUCZ.js";import"./Hidden-Cs157XWu.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BaQUBcK6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./useFocus-_F3heiAA.js";import"./useFocusRing-CPUfygMd.js";import"./useFocusable-BzgCWsb7.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CCVLKGat.js";import"./useStatic-Gr7dtALz.js";import"./Overlay-DSycwo8G.js";import"./Dialog-B5ExOuoq.js";import"./RSPContexts-D_hI6riA.js";import"./OverlayArrow-BzYR1xCl.js";import"./useControlledState-BaDEj8YE.js";import"./Collection-FQ9k0Rtz.js";import"./CollectionBuilder-BxLrnRW8.js";import"./Separator-LafJE-2b.js";import"./Group-DTUadKgc.js";import"./SearchField-3la4eIFC.js";import"./FieldError-CjkOwEOv.js";import"./Form-BSD4Q5fC.js";import"./useTextField-C6ieJdik.js";import"./useFormReset-eFY2_Wll.js";import"./TextField-EAqwucdm.js";import"./useEvent-D6x-_Zc1.js";import"./SelectionManager-ByPZOqoP.js";import"./useCollator-BSKS0jpr.js";import"./FocusScope-BkqoV2HT.js";import"./VisuallyHidden-CPCVsxvc.js";import"./DivView-DFcCXu7I.js";import"./ButtonView-DrDIEKOY.js";import"./context-p0am_T1z.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
