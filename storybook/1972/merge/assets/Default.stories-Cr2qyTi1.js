import{j as r}from"./iframe-DSkJqBaJ.js";import{B as o}from"./Button-CDKKJ9Lp.js";import{A as T}from"./ActionGroup-CWg0ZPOO.js";import{L as s,a as y}from"./LightBox-wd2zYozu.js";import{I as m}from"./Image-BtHY9X7M.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CVH07XBs.js";import{u as w}from"./DialogTriggerView-BZLzPo95.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjRPgLoo.js";import"./mergeRefs-Z8wKoPrZ.js";import"./index-CL0qA5Bh.js";import"./Text-DEYyJHCZ.js";import"./browser-D8d4HdJF.js";import"./EmulatedBoldText-CY4h7UZj.js";import"./Text-BLRpFskM.js";import"./utils-1-N0d2c9.js";import"./LoadingSpinner-Cpke26nP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8TjtXwl.js";import"./context-BGjjWy4a.js";import"./Button-D_WSnJ-T.js";import"./ProgressBar-CSEftjVr.js";import"./Label-C14Bap2a.js";import"./Hidden-4KMmbp7C.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IHONIae1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D7WkZjMs.js";import"./useFocus-G_FCb5od.js";import"./useFocusRing-CxQcEY3i.js";import"./useFocusable-DnFOFct-.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-I0QCsr-6.js";import"./useStatic-B7cHRXbC.js";import"./Overlay-mgWpGZOg.js";import"./Dialog-DxHA7eu_.js";import"./RSPContexts-DQKO52xl.js";import"./OverlayArrow-Bs3dimZg.js";import"./useControlledState-BYdmrjiu.js";import"./Collection-DAtUHX6x.js";import"./CollectionBuilder-BxVvMuh2.js";import"./Separator-CM2q7_wH.js";import"./Group-3xm6Vzmn.js";import"./SearchField-COlgHc0W.js";import"./FieldError-VY00PX4H.js";import"./Form--wHsDFUK.js";import"./useTextField-D7V5JJBm.js";import"./useFormReset-Dcdsxz2S.js";import"./TextField-MvldIgrc.js";import"./useEvent-cDDpRPoS.js";import"./SelectionManager-B8u4m53M.js";import"./useCollator-DnEaXEjZ.js";import"./FocusScope-CsPDgYW_.js";import"./VisuallyHidden-BCoHKLFo.js";import"./ButtonView-C6FU7lZ-.js";import"./context-C-BSE4mB.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
