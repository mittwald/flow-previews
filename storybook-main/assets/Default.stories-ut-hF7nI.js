import{j as r}from"./iframe-CqlVwSqw.js";import{B as o}from"./Button-OTaF8oie.js";import{A as T}from"./ActionGroup-BZ6cPQJ8.js";import{L as s,a as y}from"./LightBox-CG-5zL2I.js";import{I as m}from"./Image-Tjm8_j0v.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CQ60jK8P.js";import{u as w}from"./DialogTriggerView-BZ0wf3vM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BuREg09C.js";import"./mergeRefs-Cx0s-cU7.js";import"./index-BuKaDIt4.js";import"./Text-CQKhljzJ.js";import"./browser-D8TCc1uG.js";import"./EmulatedBoldText-C871-J_1.js";import"./Text-BcRGqQ7g.js";import"./utils-B7PoWZoE.js";import"./LoadingSpinner-3xwEonu_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BiVzy_IK.js";import"./context-QfY8Pr6d.js";import"./Button-2nj66ItS.js";import"./ProgressBar-B0gZeOOM.js";import"./Label-CpU_ziWP.js";import"./Hidden-tYtqWYMe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B6FfxehJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5TW4P5t1.js";import"./useFocus-qWrFSXYF.js";import"./useFocusRing-DLxcniMF.js";import"./useFocusable-BReVx9rr.js";import"./dynamic-BWXPpint.js";import"./getActionGroupSlot-DdOlkyEE.js";import"./useStatic-BR1_jZPV.js";import"./Overlay-BulsNwdD.js";import"./ClearPropsContextView-C3Bv20Xw.js";import"./useControlledState-DZt2Tj7Y.js";import"./ButtonView-CIub2gk0.js";import"./context-CxE1sBmK.js";import"./RSPContexts-C439z8nI.js";import"./FocusScope-Bgk9tnAX.js";import"./useCollator-CpH_e3F2.js";import"./VisuallyHidden-leZhq3qV.js";import"./Collection-DMTTSBS8.js";import"./CollectionBuilder-EuTbufj2.js";import"./Separator-PuUe3HZt.js";import"./Group-DKePUrRV.js";import"./SearchField-C2GAQJuB.js";import"./FieldError-CjaQ5IB_.js";import"./Form-Ce3Yvr6A.js";import"./useTextField-g_oQkODH.js";import"./useFormReset-DOLEs5qD.js";import"./TextField-BmXGUsbn.js";import"./useEvent-Bpofckl7.js";import"./SelectionManager-BUQAScfd.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
