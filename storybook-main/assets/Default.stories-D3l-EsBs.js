import{j as r}from"./iframe-DaY0X55-.js";import{B as o}from"./Button-DR2yamsk.js";import{A as T}from"./ActionGroup-BD_nrMv_.js";import{L as s,a as y}from"./LightBox-BcR17eS2.js";import{I as m}from"./Image-CAlKm9Sr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-DpKTVHID.js";import{u as w}from"./DialogTriggerView-Bf1Z1A17.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./Text-ClBV1PzQ.js";import"./browser-DCXXMZF1.js";import"./EmulatedBoldText-NGGT27hA.js";import"./Text-CmOgQYod.js";import"./utils-BNq2bbe-.js";import"./LoadingSpinner-L8q-c8wY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./context-C83_ciAo.js";import"./Button-BFtXZvnQ.js";import"./ProgressBar-feyz4V57.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0_kEahO.js";import"./useFocus-Bx9r-om_.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./dynamic-BrkEgl8o.js";import"./getActionGroupSlot-CD_4vSTY.js";import"./useStatic-uS-e-hBF.js";import"./Overlay-Ch92atzp.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./useControlledState-ChlOye-e.js";import"./ButtonView-B0hyzTP0.js";import"./context-By-CGifB.js";import"./RSPContexts-DzPn71fZ.js";import"./FocusScope-BkSA93dQ.js";import"./useCollator-0HaIqY_5.js";import"./VisuallyHidden-BYSFBZbq.js";import"./Collection-BNCGMhbn.js";import"./CollectionBuilder-r4GPnu41.js";import"./Separator-B-P32e-W.js";import"./Group-BRma_Z3w.js";import"./SearchField-BRBjfrRR.js";import"./FieldError-B2eDKzT7.js";import"./Form-C_YqGgE4.js";import"./useTextField-ChCqJFCV.js";import"./useFormReset-Cfy0Tx0G.js";import"./TextField-CrD7kLQK.js";import"./useEvent-CVZyjoEr.js";import"./SelectionManager-22HKkmij.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
