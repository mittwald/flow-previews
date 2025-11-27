import{j as r,r as f}from"./iframe-CW_1kzn8.js";import{b as a,u as p,F as d,t as j}from"./Form-D25i7OyI.js";import{L as t}from"./Label-C6A80iGS.js";import{R as u,S as F}from"./ResetButton-BSjIWx2p.js";import{B as l}from"./Button-DG8ItREn.js";import{S as b,s as c}from"./Section-BtQd622a.js";import{A as E}from"./ActionGroup-CMigRbOL.js";import{as as S,ar as o,g as T}from"./TimeField-O8dBCN92.js";import"./index-nuYtCEEu.js";import"./dynamic-CvIdWWig.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./context-g9M5CTWm.js";import"./browser-DYjBW3Mh.js";import"./utils-DECz7q9i.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CwkyBxVN.js";import"./Text-Bt12Aiuy.js";import"./EmulatedBoldText-CjYCMvu1.js";import"./LoadingSpinner-DDEfeVZt.js";import"./Button-CKDlZl9E.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./context-FK80ZNI-.js";import"./RSPContexts-jLoiaaIz.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./useStatic-CyHKbDme.js";import"./Accordion-C2JQB3aN.js";import"./Alert-wmQE4eTZ.js";import"./AlertIcon-C9ZLFLyq.js";import"./AlertBadge-DK8CoaVP.js";import"./Align-BVXc73zR.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./TableFooterRow-Dz133oSH.js";import"./SkeletonText-bNjOl8Lj.js";import"./Avatar-nxK6ayEs.js";import"./AvatarStack-C5K3zfKN.js";import"./Badge-B4vhdI6d.js";import"./BigNumber-BCtOXUOq.js";import"./Breadcrumb-UN90IgbC.js";import"./Link-BjJvsD30.js";import"./Heading-BDPW60Tv.js";import"./Legend-Dv9medtK.js";import"./FileCardList-BzJWWuzT.js";import"./Image-B8909EtY.js";import"./Color-yZsfwNHB.js";import"./Content-NVky5ofe.js";import"./ContextualHelpTrigger-NzhCC0hh.js";import"./CounterBadge-DRnfRmyT.js";import"./DonutChart-DfWQ2yNh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_-uwk5j.js";import"./Header-CIgs80Lw.js";import"./Initials-CtZJGVAE.js";import"./InlineCode-BUUGDwVl.js";import"./PopoverTrigger-C7J2NazX.js";import"./Separator-CSUhftqZ.js";import"./Message-gD0LEZWb.js";import"./MessageSeparator-f8F7ZaUG.js";import"./NavigationGroup-kj_r2PG6.js";import"./Notification-Fp2frcIZ.js";import"./NotificationProvider-Cm0Lnyko.js";import"./ProgressBar-CKvf8kaJ.js";import"./Rating-BH2oI4ZI.js";import"./Skeleton-BlS-zqmu.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
