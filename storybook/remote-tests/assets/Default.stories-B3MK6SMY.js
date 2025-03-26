import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{B as o}from"./Button-DoxNqpU5.js";import{A as T}from"./ActionGroup-Dqbs5KVE.js";import{L as s,a as y}from"./LightBox-C6avc0Y0.js";import{I as m}from"./Image-RII0nsTh.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./IconApp-C5KCAdlI.js";import{u as G,v as O}from"./IconWarning-C6q-vt44.js";import{u as w}from"./OverlayTrigger-Dv9azQvo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./Wrap-DQq6jo70.js";import"./Text-Dr5MNJ9m.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-BUuVncJZ.js";import"./utils-D_n-6U4k.js";import"./LoadingSpinner-C8RokD4H.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BilYt8La.js";import"./useStatic-RnO7WcrC.js";import"./Dialog-D9rW5YgD.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./useOverlayTriggerState-EP699KjE.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./Overlay-DjlPbzgy.js";import"./context-DaPO0HZf.js";const Dr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Wr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Wr as __namedExportsOrder,Dr as default};
