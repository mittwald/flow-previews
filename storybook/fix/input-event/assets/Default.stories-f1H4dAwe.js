import{j as r}from"./iframe-Dykv-siI.js";import{B as o}from"./Button-BwJxl8P2.js";import{A as T}from"./ActionGroup-BQR0Ofpz.js";import{L as s,a as y}from"./LightBox-DuVFjzV8.js";import{I as m}from"./Image-BQt05b-J.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Dqgt16D-.js";import{u as w}from"./DialogTriggerView-C3VJcWUc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./Text-D7_Ckqho.js";import"./browser-C-YjMasC.js";import"./EmulatedBoldText-CBoWsrrJ.js";import"./Text-CLEeB9ax.js";import"./utils-B-ceMMh2.js";import"./LoadingSpinner-C6ucKsq_.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./context-5SGg1gn7.js";import"./Button-BG4LaOh8.js";import"./ProgressBar-D9jVrFgv.js";import"./Label-DDTleg66.js";import"./Hidden-B1Iw_O48.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cl2tFDz1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMB6_eRB.js";import"./useFocus-DT_Sim8A.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocusable-DsypMLKX.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BhsGjSHK.js";import"./useStatic-DesXMpPQ.js";import"./Overlay-Cl3YEBVd.js";import"./Dialog-fv_y1U4K.js";import"./RSPContexts-D030pJdB.js";import"./OverlayArrow-NgM1lQd-.js";import"./useControlledState-C0gMHLaR.js";import"./Collection-DswZtzwx.js";import"./CollectionBuilder-BVax36LH.js";import"./Separator-CubwYYam.js";import"./Group-CHnOtxCU.js";import"./SearchField-ZKNym0UI.js";import"./FieldError-HMu3Fq7J.js";import"./Form-CjGGxOiW.js";import"./useTextField-DP0W3nYG.js";import"./useFormReset-ceBz3BPo.js";import"./TextField-Cfy1I-0m.js";import"./useEvent-qRsXeNBQ.js";import"./SelectionManager--KDKW3lV.js";import"./useCollator-BbJwwBb8.js";import"./FocusScope-BSi0CMVM.js";import"./VisuallyHidden-BglhDB6t.js";import"./DivView-Dk4vWtOe.js";import"./ButtonView-DOYZJ3TB.js";import"./context-BIjwWtGw.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
