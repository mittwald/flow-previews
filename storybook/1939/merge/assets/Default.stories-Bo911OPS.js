import{j as r}from"./iframe-BmZalVao.js";import{B as o}from"./Button-V4gWXU1O.js";import{A as T}from"./ActionGroup-CsMbHyyk.js";import{L as s,a as y}from"./LightBox-CdPGyXKM.js";import{I as m}from"./Image-MgrFXdG8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Uta2YDJP.js";import{u as w}from"./DialogTriggerView-DWEqOoqf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./Text-1n2lmTX2.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";import"./Text-fNTtgWDx.js";import"./utils-CAvZ88A2.js";import"./LoadingSpinner-D3X9xJLw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./context-CHBdcuz4.js";import"./Button-B7Mfw9fE.js";import"./ProgressBar-B81Zb8lf.js";import"./Label-BMWYWyxm.js";import"./Hidden-CVk6dJGe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dcdc4QL3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ceZxyZeS.js";import"./useFocus-CJp-zb5k.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocusable-RaDIdBmD.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bu_U71dX.js";import"./useStatic-CmyP-4Qc.js";import"./Overlay-D3iaS913.js";import"./Dialog-Ck302eWi.js";import"./RSPContexts-CXUSdcNb.js";import"./OverlayArrow-W1WVUYgG.js";import"./useControlledState-DkevdXcu.js";import"./Collection-CssVnDWl.js";import"./CollectionBuilder-1RXdNJ75.js";import"./Separator-CxpVYPZi.js";import"./Group-DxIJd-p3.js";import"./SearchField-DC-QuQzo.js";import"./FieldError-Bd-ukmcE.js";import"./Form-B9rSyzAs.js";import"./useTextField-CryG3TpM.js";import"./useFormReset-BvOmhq3S.js";import"./TextField-BS0IdMWE.js";import"./useEvent-C050BYP-.js";import"./SelectionManager-B-lKeVzN.js";import"./useCollator-B5Q-zmAD.js";import"./FocusScope-H3r5uJpM.js";import"./VisuallyHidden-CzhjBb86.js";import"./ButtonView-DHTfh3Cp.js";import"./context-Dnd0SHjI.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
