import{j as r}from"./iframe-ChOLfm48.js";import{B as o}from"./Button-B4rVmYfF.js";import{A as T}from"./ActionGroup-CIqxDWXg.js";import{L as s,a as y}from"./LightBox-DKMTgV7R.js";import{I as m}from"./Image-C3-vEdaF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a8 as O}from"./IconWarning-BSUZvRGT.js";import{u as w}from"./DialogTriggerView-D5enS8PQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./Text-C5EipuV_.js";import"./browser-DWi47IAH.js";import"./EmulatedBoldText-DdFIKcy_.js";import"./Text-Sl4cdtSO.js";import"./utils-YDvgcPpP.js";import"./LoadingSpinner-CVKVUr-K.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./context-DA6DtsVb.js";import"./Button-BHJ4uNPj.js";import"./ProgressBar-C09E4iv2.js";import"./Label-DXrtAbBw.js";import"./Hidden-DmBctQal.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsHZNL1P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CNl9HBfO.js";import"./useFocus-DMe4XyoT.js";import"./useFocusRing-DPdWCN0f.js";import"./useFocusable-B1fc-Qnz.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BFZbab6X.js";import"./useStatic-ZU4u6g9v.js";import"./Overlay-BwFqFZJJ.js";import"./Dialog-LDu6X4iJ.js";import"./RSPContexts-C8KeXTpg.js";import"./OverlayArrow-PXUzuxoY.js";import"./useControlledState-Dmz-xjYt.js";import"./Collection-BYYSTjrH.js";import"./CollectionBuilder-BFso7U7_.js";import"./Separator-DEQT6UbO.js";import"./Group-DfdPT8Gy.js";import"./SearchField-CiSMqBGJ.js";import"./FieldError-JlwACqz9.js";import"./Form-CA_oHzJs.js";import"./useTextField-DWlRW7Y8.js";import"./useFormReset-2KspnF8x.js";import"./TextField-BNJiEHR6.js";import"./useEvent-BFXA3T9F.js";import"./SelectionManager-CQRDuBDt.js";import"./useCollator-BSIYhoOJ.js";import"./FocusScope-DwqEaNE4.js";import"./VisuallyHidden-eytsr0lz.js";import"./DivView-DKkbBI5_.js";import"./ButtonView-am1E71Ee.js";import"./context-CLjENUX9.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
