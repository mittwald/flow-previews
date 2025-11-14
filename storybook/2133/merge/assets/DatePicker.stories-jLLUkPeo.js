import{j as r,r as j}from"./iframe-DxjJvypA.js";import{c as a,u as d,F as c,t as b}from"./Form-DJxnwuL9.js";import{L as t}from"./Label-BCxsZWDW.js";import{R as f,S as h}from"./ResetButton-CKNshwdg.js";import{B as u}from"./Button-CsJkXLJC.js";import{S as E,s as p}from"./Section-B6nN9o_0.js";import{A as S}from"./ActionGroup-CVcTWpTg.js";import{H as l,G as o,$ as D,I as B,F as g}from"./Modal-scDbqKwL.js";import"./index-nuYtCEEu.js";import"./dynamic-BdL6WG8t.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./clsx-B-dksMZM.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./browser-CB6HLjfz.js";import"./utils-6KDkR0i-.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BlszW1tj.js";import"./Text-CGLUa4sd.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./LoadingSpinner-q348yrim.js";import"./Button-nEfrx5gJ.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./context-CTfXc2Zo.js";import"./RSPContexts-BduYfYam.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./FileCardList-BVyoDE-7.js";import"./Avatar-BR29CIP8.js";import"./AlertIcon-CJADbW9L.js";import"./Image-C9uy31u2.js";import"./Link-DMUApF-a.js";import"./ControlledNotification-vaU_F80i.js";import"./LayoutCard-aWGkBZVt.js";import"./Accordion-Ps3GdnvV.js";import"./Alert-B_YHHoEM.js";import"./AlertBadge-LOZq_93c.js";import"./Align-lkWsfgzV.js";import"./AvatarStack-CwQZo75P.js";import"./BigNumber-B3EhvRla.js";import"./Breadcrumb-73u-YP5B.js";import"./Heading-BRsOw7TR.js";import"./Legend-rhAR0u5-.js";import"./Color-CGGKQlcf.js";import"./TableFooterRow-DFeDu75P.js";import"./SkeletonText-eFRLkdn1.js";import"./Content-D4JTeq-s.js";import"./CounterBadge-CpPkfl65.js";import"./DonutChart-CeTOSEye.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clnhjbhg.js";import"./Header-D2mqm9n1.js";import"./Initials-BkyQRHGv.js";import"./InlineCode-2bpBAEcp.js";import"./Separator-Ci8H9o73.js";import"./MessageSeparator-CYyIHhcK.js";import"./NavigationGroup-BPerNp2h.js";import"./Notification-Cqym3ej0.js";import"./NotificationProvider-CPmTQg-x.js";import"./ProgressBar-CRpWDhXs.js";import"./Rating-Cr0_tTre.js";import"./Skeleton-BtPwNpqY.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Cr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await p(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(c,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Cr as default};
