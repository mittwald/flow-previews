import{j as r,R}from"./iframe-B5D6Jy2e.js";import{P as i,a as x}from"./Popover-Bja_DHOi.js";import{B as h}from"./Button-D_cucc2Q.js";import{u as P}from"./DialogTriggerView-iGbG-aRK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./Dialog-CYkZaeYk.js";import"./Button-BIn7btPV.js";import"./utils-Bs8Wqn-q.js";import"./ProgressBar-B93iLJrK.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DkjeIhDx.js";import"./context-Bj-w4NoV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocus-CkjZAdJ6.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";import"./RSPContexts-v362EzbA.js";import"./OverlayArrow-m6vw9un5.js";import"./useControlledState-Yj7M3RjN.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./Text-Bv7a287p.js";import"./Input-ryFqDY2c.js";import"./SearchField-Bsl1v9iA.js";import"./FieldError-DXJUVvju.js";import"./Form-DGtlbNAt.js";import"./Group-ClvX5TRg.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./useTextField-4CgH3C31.js";import"./useFormReset-CFSg60RK.js";import"./TextField-PNGd04kr.js";import"./SelectionManager-Yyuo4m1t.js";import"./useEvent-DdUUCx0h.js";import"./useCollator-BXMjrBT_.js";import"./FocusScope-BljfDlo2.js";import"./VisuallyHidden-1pt6eLog.js";import"./IconWarning-DjYRPplk.js";import"./Text-Fuh2Ogih.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./context-IJ_Eymmu.js";import"./useStatic-DN3utWlK.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
