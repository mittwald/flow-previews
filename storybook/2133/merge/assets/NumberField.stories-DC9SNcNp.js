import{j as r,r as x}from"./iframe-DxjJvypA.js";import{c as a,u as l,F as d,t as j}from"./Form-DJxnwuL9.js";import{L as o}from"./Label-BCxsZWDW.js";import{R as c,S as f}from"./ResetButton-CKNshwdg.js";import{B as p}from"./Button-CsJkXLJC.js";import{S as g,s as u}from"./Section-B6nN9o_0.js";import{A as b}from"./ActionGroup-CVcTWpTg.js";import{N as t,x as E,F as S}from"./Modal-scDbqKwL.js";import"./index-nuYtCEEu.js";import"./dynamic-BdL6WG8t.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./clsx-B-dksMZM.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./browser-CB6HLjfz.js";import"./utils-6KDkR0i-.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BlszW1tj.js";import"./Text-CGLUa4sd.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./LoadingSpinner-q348yrim.js";import"./Button-nEfrx5gJ.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./context-CTfXc2Zo.js";import"./RSPContexts-BduYfYam.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./FileCardList-BVyoDE-7.js";import"./Avatar-BR29CIP8.js";import"./AlertIcon-CJADbW9L.js";import"./Image-C9uy31u2.js";import"./Link-DMUApF-a.js";import"./ControlledNotification-vaU_F80i.js";import"./LayoutCard-aWGkBZVt.js";import"./Accordion-Ps3GdnvV.js";import"./Alert-B_YHHoEM.js";import"./AlertBadge-LOZq_93c.js";import"./Align-lkWsfgzV.js";import"./AvatarStack-CwQZo75P.js";import"./BigNumber-B3EhvRla.js";import"./Breadcrumb-73u-YP5B.js";import"./Heading-BRsOw7TR.js";import"./Legend-rhAR0u5-.js";import"./Color-CGGKQlcf.js";import"./TableFooterRow-DFeDu75P.js";import"./SkeletonText-eFRLkdn1.js";import"./Content-D4JTeq-s.js";import"./CounterBadge-CpPkfl65.js";import"./DonutChart-CeTOSEye.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clnhjbhg.js";import"./Header-D2mqm9n1.js";import"./Initials-BkyQRHGv.js";import"./InlineCode-2bpBAEcp.js";import"./Separator-Ci8H9o73.js";import"./MessageSeparator-CYyIHhcK.js";import"./NavigationGroup-BPerNp2h.js";import"./Notification-Cqym3ej0.js";import"./NotificationProvider-CPmTQg-x.js";import"./ProgressBar-CRpWDhXs.js";import"./Rating-Cr0_tTre.js";import"./Skeleton-BtPwNpqY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
