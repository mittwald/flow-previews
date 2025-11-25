import{j as r,r as f}from"./iframe-B2xkRX6A.js";import{b as a,u as p,F as d,t as j}from"./Form-B_BdQBl8.js";import{L as t}from"./Label-BUxdBOic.js";import{R as u,S as F}from"./ResetButton-BJaJOnmZ.js";import{B as l}from"./Button-dkMnbJWG.js";import{S as b,s as c}from"./Section-Dun5Ah7E.js";import{A as E}from"./ActionGroup-BNpn1NX2.js";import{aw as S,av as o,F as T}from"./Modal-CO2TWQss.js";import"./index-nuYtCEEu.js";import"./dynamic-D0Nrpf8a.js";import"./flowComponent-D639mhqg.js";import"./index-CgXs-3w1.js";import"./clsx-B-dksMZM.js";import"./index-Ddwq7UUc.js";import"./useLocalizedStringFormatter-CFLWoqqs.js";import"./context-0lXYs95B.js";import"./browser-QmAcXv_F.js";import"./utils-Bn0vlKhH.js";import"./ProgressBar-B8kHCfIw.js";import"./Hidden-WUyQGACH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D3UwWGLP.js";import"./Text-CCe4xaNb.js";import"./EmulatedBoldText-C1Q2Dtf3.js";import"./LoadingSpinner-kT-Lxibs.js";import"./Button-ZZalAwAh.js";import"./useFocusRing-Bx_AG6Dt.js";import"./useFocusable-DULkbCFr.js";import"./context-D2PnJfRR.js";import"./RSPContexts-CwQQ0l-4.js";import"./Collection-Pjtcg2qL.js";import"./CollectionBuilder-VeHHQrjG.js";import"./SelectionIndicator-DaXywehL.js";import"./Separator-DixHCPqE.js";import"./useStatic-BtgzXQ8g.js";import"./FileCardList-ClKhcOXP.js";import"./Avatar-D9obBJsL.js";import"./AlertIcon-CEpZA0Vz.js";import"./Image-DmJWYSzI.js";import"./Link-BRl6hkBv.js";import"./ControlledNotification-DS-T__7q.js";import"./Flex-CvnfZlCm.js";import"./Accordion-CesJn3LP.js";import"./Alert-CEP0osH1.js";import"./AlertBadge-pEQTf4Bk.js";import"./Align-CP_BULLQ.js";import"./AvatarStack-B3-ZBtgK.js";import"./BigNumber-DSCSkpPt.js";import"./Breadcrumb-Ox30Nh91.js";import"./Heading-C47Y59gw.js";import"./Legend-CPHf_SU9.js";import"./Color-CRQqnv2Z.js";import"./TableFooterRow-BOTmu1mA.js";import"./SkeletonText-s3T3xbN2.js";import"./Content-CxihpQZ-.js";import"./CounterBadge-Cr8rMFp7.js";import"./DonutChart-DEAWEWe6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrMCUhBk.js";import"./Header-Cmx_1A0G.js";import"./Initials-CiGsvn0n.js";import"./InlineCode-C_72mhO0.js";import"./LayoutCard-BYbleerS.js";import"./Separator-hUKHPUi5.js";import"./MessageSeparator-BjqeMdwr.js";import"./NavigationGroup-CLRQhA7L.js";import"./Notification-UiqXE8jo.js";import"./NotificationProvider-DbD6PgRm.js";import"./ProgressBar-CF2aMWk9.js";import"./Rating-DYTssgfH.js";import"./Skeleton-DC4X9OIQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
