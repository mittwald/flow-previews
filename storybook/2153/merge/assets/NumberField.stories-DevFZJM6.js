import{j as r,r as x}from"./iframe-tNeMQtR9.js";import{b as a,u as l,F as d,t as j}from"./Form-CZq0j07w.js";import{L as o}from"./Label-QQ-I3K-S.js";import{R as c,S as f}from"./ResetButton-DjLAqSBa.js";import{B as p}from"./Button-evMO-5rj.js";import{S as b,s as u}from"./Section-CWr8AAoQ.js";import{A as g}from"./ActionGroup-BG5GPQGU.js";import{N as t,x as E,F as S}from"./Modal-BTUku4xq.js";import"./index-nuYtCEEu.js";import"./dynamic-C77k3JSm.js";import"./flowComponent-Cm6q17-o.js";import"./index-KVcqOv8o.js";import"./clsx-B-dksMZM.js";import"./index-CkwyjQRx.js";import"./useLocalizedStringFormatter-BvPPnk_e.js";import"./context-CPiapOtt.js";import"./browser-tvBxR0oJ.js";import"./utils-COmC6Eka.js";import"./ProgressBar-CqKQSfDd.js";import"./Hidden-Cg7taIb1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CQOJDPfQ.js";import"./Text-C2VO0De_.js";import"./EmulatedBoldText-Cjn4wbX9.js";import"./LoadingSpinner-CNWC6196.js";import"./Button-BinTn0sL.js";import"./useFocusRing-CrzENmB0.js";import"./useFocusable-BOEQm_aX.js";import"./context-Cey1J_Al.js";import"./RSPContexts-DY330ZPC.js";import"./Collection-BtpQxErv.js";import"./CollectionBuilder-DjYSc1J7.js";import"./SelectionIndicator-CUsz2YTu.js";import"./Separator-DgMEcD2E.js";import"./useStatic-D2eB1aGn.js";import"./FileCardList-BMiH65Ui.js";import"./Avatar-DDlp-vfW.js";import"./AlertIcon-Bzk-eUz1.js";import"./Image-CCt_1c0z.js";import"./Link-D-oNPjX9.js";import"./ControlledNotification-BwqgxSUH.js";import"./Flex-rZ8v-_CO.js";import"./Accordion-B23Ox3j7.js";import"./Alert-DZNlkX8e.js";import"./AlertBadge-D7TFwUaN.js";import"./Align-DCuTz2PT.js";import"./AvatarStack-8752QnfM.js";import"./BigNumber-CjI3llLI.js";import"./Breadcrumb-BQFrdOyt.js";import"./Heading-C8p-a7zJ.js";import"./Legend-DGYMeAYO.js";import"./Color-CkZmA5bq.js";import"./TableFooterRow-C3NFPVoX.js";import"./SkeletonText-VT80yi-y.js";import"./Content-CJ0-JcWV.js";import"./CounterBadge-DMa-J370.js";import"./DonutChart-LklFYUFk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CXJ82N6E.js";import"./Header-6aMHBv44.js";import"./Initials-DngG0C9b.js";import"./InlineCode-DyN8wBPc.js";import"./LayoutCard-CuTcuwsm.js";import"./Separator-YVCX1fHW.js";import"./MessageSeparator-CgLaydGc.js";import"./NavigationGroup-BfN1VqG1.js";import"./Notification-jWU6KLhG.js";import"./NotificationProvider-C8ET-e-A.js";import"./ProgressBar-Bcq6KtH-.js";import"./Rating-kZ5WeiDB.js";import"./Skeleton-kxM3gt-s.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
