import{j as r,r as f}from"./iframe-DNac-Rqf.js";import{b as p,u as a,F as d,t as j}from"./Form-BbGFvx7t.js";import{L as t}from"./Label-CblnI0HW.js";import{R as u,S as F}from"./ResetButton-CxGO8Txt.js";import{B as l}from"./Button-CUSLqQMc.js";import{S as b,s as c}from"./Section-DvtlFJN0.js";import{A as E}from"./ActionGroup-HKL5W0AJ.js";import{au as S,at as o,g as T}from"./TimeField-DpY9PVqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYsIbK1A.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./context-g2-sYTkT.js";import"./browser-nJ4CE5Oc.js";import"./utils-BduO7XRu.js";import"./ProgressBar-Cg_AUX6O.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cg768Zjl.js";import"./remote-DNzJzz_i.js";import"./Text-D0ZE_3Re.js";import"./EmulatedBoldText-Dq-fgG2H.js";import"./LoadingSpinner-lobDwtPy.js";import"./Button-jJfhABmc.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./context-CZdohShl.js";import"./RSPContexts-Cd6lFFaf.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./useStatic-ihim0ckM.js";import"./Accordion-BpjGjdfu.js";import"./Alert-C4SmUy15.js";import"./AlertIcon-BCoAEyQh.js";import"./AlertBadge-B4Gw2oem.js";import"./Align-BYSxjVaI.js";import"./Popover-Cv71dRgv.js";import"./OverlayTrigger-BBjUB5WE.js";import"./TableFooterRow-TOZfCvNN.js";import"./SkeletonText-Dtz0dWFM.js";import"./Avatar-C3ls42ZT.js";import"./AvatarStack-CB7huUjR.js";import"./Badge-BTPi5GTz.js";import"./BigNumber-C6J1IAVW.js";import"./Breadcrumb-CusU5TRR.js";import"./Link-Ddteou-D.js";import"./Heading-B9C-Q8d_.js";import"./Legend-C843Nwot.js";import"./FileCardList-C3A0Rc32.js";import"./Image-D-F7EiiO.js";import"./Color-DOa8qdv1.js";import"./Content-ze7-zRt3.js";import"./ContextualHelpTrigger-BMAda_hh.js";import"./CounterBadge-BP5WHUxC.js";import"./DonutChart-ChhISA-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B3WFXRVC.js";import"./Header-D32huwY0.js";import"./Initials-By4hdRc1.js";import"./InlineCode-BSZYsfjr.js";import"./PopoverTrigger-CtfZ1cKH.js";import"./Separator-T5QLy1gm.js";import"./Message-B9f-cPpE.js";import"./MessageSeparator-C2jALfgb.js";import"./NavigationGroup-D3e0XJsj.js";import"./Notification-BzWIEsEu.js";import"./NotificationProvider-BnmgoZU5.js";import"./ProgressBar-DEEkwCFH.js";import"./Rating-C_CSOchR.js";import"./Skeleton-CSWR-u_J.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async x=>{await c(1500),B(x)},h=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
