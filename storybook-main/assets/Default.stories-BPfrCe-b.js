import{j as r}from"./iframe-CSKx2DB9.js";import{B as o}from"./Button-CGfBcGjf.js";import{A as T}from"./ActionGroup-Da4-MZ9w.js";import{L as s,a as y}from"./LightBox-BZnuWmND.js";import{I as m}from"./Image-D1hOz_gm.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BzSjyCQK.js";import{u as w}from"./DialogTriggerView-B5qjcGt-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./Text-Bmwkohav.js";import"./browser-Dat2Zw9G.js";import"./EmulatedBoldText-BvpVJXGr.js";import"./Text-B7qxA7QU.js";import"./utils-YOZNNe11.js";import"./LoadingSpinner-BollpMOD.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./context-Bn01uWj8.js";import"./Button-B9MrnXzC.js";import"./ProgressBar-YhbO88q7.js";import"./Label-DAbN940v.js";import"./Hidden-DMi08SHV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_rV78s5e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ecHooUdc.js";import"./useFocus-I-Zr9gNg.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocusable-Bvlvgb30.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-v4y_SS20.js";import"./useStatic-Bj6FvUH8.js";import"./Overlay-DtC8HMEu.js";import"./Dialog-DyxFQfdj.js";import"./RSPContexts-wGW2yDhA.js";import"./OverlayArrow-Do1uAdCK.js";import"./useControlledState-C62hAHev.js";import"./Collection-xryT71jZ.js";import"./CollectionBuilder-DUDLoyvE.js";import"./Separator-9BmxbDD1.js";import"./Group-CcV8UsXg.js";import"./SearchField-CCkKmI81.js";import"./FieldError-BRs7GrZl.js";import"./Form-BMsmelnL.js";import"./useTextField-Z7fbw5-A.js";import"./useFormReset-BnPXW2IT.js";import"./TextField-BnFF1ZSM.js";import"./useEvent-BD3Jcka0.js";import"./SelectionManager-C0eeXnR3.js";import"./useCollator-D-NDo9Pp.js";import"./FocusScope-CQRCLCh1.js";import"./VisuallyHidden-BzxCqTVo.js";import"./DivView-BQ9wdLqu.js";import"./ButtonView-BpcEzJyy.js";import"./context-DR_D1zB2.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
