import{j as r}from"./iframe-Mcl-fp9_.js";import{B as o}from"./Button-DAKl4AvN.js";import{A as T}from"./ActionGroup-Di0DmuM-.js";import{L as s,a as y}from"./LightBox-lT68sFfq.js";import{I as m}from"./Image-BLHzjilP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-Lyb53OnO.js";import{u as w}from"./DialogTriggerView-4ZuKOHwK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./Text-DEIveL77.js";import"./browser-BsWVSY18.js";import"./EmulatedBoldText-yaK_s2Yh.js";import"./Text-DoGyCRc9.js";import"./utils-n1fDyKZ3.js";import"./LoadingSpinner-COEYl7Pk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./context-BorfhQA_.js";import"./Button-B-ha5P18.js";import"./ProgressBar-B-0Imi_2.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DPxX2fH3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CSmiIi-0.js";import"./useFocus-SsmNYjih.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocusable-CVnYh69T.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DpUkVKXY.js";import"./useStatic-DehluLPa.js";import"./Overlay-CU6XQaLd.js";import"./Dialog-Dbuy5IKg.js";import"./RSPContexts-D5Q6Wlej.js";import"./OverlayArrow-BjKZColU.js";import"./useControlledState-ECxCAN2t.js";import"./Collection-JtFNZJGn.js";import"./CollectionBuilder-B60nQQtd.js";import"./Separator-BOJM7lM-.js";import"./Group-IKUML2BV.js";import"./SearchField-CkC64XB4.js";import"./FieldError-BKKPCq9e.js";import"./Form-W-5ctzVT.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./TextField-Cz-aJsxu.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./useCollator-BtrL4jRN.js";import"./FocusScope-D7ZuSfg7.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./ButtonView-BdjHJ8X7.js";import"./context-UATQnsvR.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
