import{j as r}from"./iframe-DzdsrO80.js";import{B as o}from"./Button-DVR7cX3i.js";import{A as T}from"./ActionGroup-DOlXr0dv.js";import{L as s,a as y}from"./LightBox-D8dhEK7l.js";import{I as m}from"./Image-Drbw2Hn1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-B3m6OsdH.js";import{u as w}from"./DialogTriggerView-BSpQgGle.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./Text-DXUL7YAG.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./Text-CRTGmFuV.js";import"./utils-CvAakX2W.js";import"./LoadingSpinner-PW_7_s64.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./context-DCkzppns.js";import"./Button-BCqDIvjf.js";import"./ProgressBar-LQ-fnBcd.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtHrL8qq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DskVbL7b.js";import"./useFocus-B0VC8u8k.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-COrah7QA.js";import"./useStatic-CzVMgagU.js";import"./Overlay-DkFy78FU.js";import"./Dialog-d3aXPnlF.js";import"./RSPContexts-DgNZ7nRI.js";import"./OverlayArrow-4JOsbCJv.js";import"./useControlledState-D4aZ1p71.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./Group-Cdr53w7M.js";import"./SearchField-C817Qgil.js";import"./FieldError-CeKpopQl.js";import"./Form-C696dGLt.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./TextField-Cwc92i9-.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./useCollator-B4_CrHfJ.js";import"./FocusScope-DDPGgWDg.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./ButtonView-DDzASKwg.js";import"./context-DKufrzCY.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
