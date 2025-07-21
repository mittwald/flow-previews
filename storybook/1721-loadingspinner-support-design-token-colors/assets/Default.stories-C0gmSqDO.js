import{j as r}from"./iframe-ZeYQaqTq.js";import{B as o}from"./Button-CmxRhHKt.js";import{A as T}from"./ActionGroup-BJWnFRlh.js";import{L as m,a as y}from"./LightBox-BTAsErFF.js";import{I as s}from"./Image-D5oga86H.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Mt76M62l.js";import{u as w}from"./DialogTriggerView-Udssk73q.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./Text-ADEYgpsM.js";import"./browser-BE8-G2h8.js";import"./EmulatedBoldText-CNK-5iTs.js";import"./Text-CTESEC7p.js";import"./utils-CZSTTIRS.js";import"./LoadingSpinner-BsYGnIlm.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./context-BdRPu6tD.js";import"./Button-8lvA6fYu.js";import"./ProgressBar-y-6EHwAj.js";import"./Label-BCX0WWwJ.js";import"./Hidden-BCzOp-Gy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QKgiZqr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./useFocus-EvOFeEzd.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocusable-_P_eC141.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BZJ1-G1h.js";import"./useStatic-B42yuxiF.js";import"./Overlay-4jHUVifT.js";import"./Dialog-CPFJ-em9.js";import"./RSPContexts-B51mpv1W.js";import"./OverlayArrow-BX3D_PZr.js";import"./useControlledState-fovAuXst.js";import"./Collection-DRioiR9B.js";import"./CollectionBuilder-_wjpVTSh.js";import"./Separator-CPoxSccm.js";import"./Input-Co1lLTdd.js";import"./SearchField-Bklbm_03.js";import"./FieldError-mFBw1lmq.js";import"./Form-MeaiSeb5.js";import"./Group-DRjYMMoj.js";import"./useTextField-D3PtH1hi.js";import"./useFormReset-DYMhoeZf.js";import"./TextField-C77kbV9Z.js";import"./SelectionManager-exFNYZLH.js";import"./useEvent-BAIrY4aR.js";import"./useCollator-CCl5WH_E.js";import"./FocusScope-C_dTN5HC.js";import"./VisuallyHidden-CW-y3tuT.js";import"./DivView-CqTk3Y0c.js";import"./ButtonView-CMgwR8MX.js";import"./context-D0miJpww.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
