import{j as r}from"./iframe-CqLmdNeC.js";import{B as o}from"./Button-Cck2R8d6.js";import{A as T}from"./ActionGroup-CKPFyTY5.js";import{L as s,a as y}from"./LightBox-rsq2yU8H.js";import{I as m}from"./Image-C5dH_vqO.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CMS0_eHL.js";import{u as w}from"./DialogTriggerView-zx0O_dOm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./Text-BZ3j-6fi.js";import"./browser-D8TwyJaY.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./Text-BpEumjQQ.js";import"./utils-DVF3OaDc.js";import"./LoadingSpinner-CTcHqu9G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./context-DzYatHkR.js";import"./Button-D6TKDn6h.js";import"./ProgressBar-Bc_l3bRQ.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BygwjnmG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKz354k3.js";import"./useFocus-CLcOeBIv.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocusable-zATjwRwW.js";import"./dynamic-DFe3knzM.js";import"./getActionGroupSlot-DLpPTNRU.js";import"./useStatic-suMR32Og.js";import"./Overlay-CiWQWbYF.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./useControlledState-Blr5WM8A.js";import"./ButtonView-Qj92RoGG.js";import"./context-BV-Ks7Oh.js";import"./RSPContexts-BcXX2Wqq.js";import"./FocusScope-D6JShGuB.js";import"./useCollator-BJ0ATcQr.js";import"./VisuallyHidden-DFEHY8aA.js";import"./Collection-BtI4BBrq.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Separator-Bx0e0X1l.js";import"./Group-DSZMysmZ.js";import"./SearchField-Bt3pj5UO.js";import"./FieldError-BRlNdIVM.js";import"./Form-Dz9VUwD7.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./TextField-lXG7M95o.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
