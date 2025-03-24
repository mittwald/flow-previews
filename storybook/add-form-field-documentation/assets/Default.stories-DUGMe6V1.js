import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as o}from"./Button-GjZOW2uO.js";import{A as T}from"./ActionGroup-CRCcp6EQ.js";import{L as s,a as y}from"./LightBox-Ajifyc9w.js";import{I as m}from"./Image-cx1QRj6B.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./IconApp-DZf0STiH.js";import{u as G,v as O}from"./IconWarning-BqX4qer7.js";import{u as w}from"./OverlayTrigger-CI-Ah9mp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./Wrap-DQq6jo70.js";import"./Text-BPAvSiAh.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CxIdO6ok.js";import"./utils-BAtcVSHo.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-Bd7GnYjT.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CeuQjEkT.js";import"./useStatic-CZ_o1reA.js";import"./Dialog-CI6Vrv3H.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-B-bZ71PV.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BHsfcKmd.js";import"./CollectionBuilder-C_ibKIdv.js";import"./Separator-BH0DZ6tu.js";import"./SelectionManager-DjqhJ6FU.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-FOL1CxoP.js";import"./VisuallyHidden-FconPwXt.js";import"./Overlay-BinHV20V.js";import"./context-BWt75kQX.js";const wr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Dr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Dr as __namedExportsOrder,wr as default};
