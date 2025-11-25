import{j as r,r as x}from"./iframe-Ce1y9mDa.js";import{c as a,u as l,F as d,t as j}from"./Form-CFvLKARQ.js";import{L as o}from"./Label-CYdyGifL.js";import{R as c,S as f}from"./ResetButton-BJASPMGl.js";import{B as p}from"./Button-7HXgfRQm.js";import{S as g,s as u}from"./Section-BnpA4R0K.js";import{A as b}from"./ActionGroup-GiQVcnjT.js";import{N as t,x as E,F as S}from"./Modal-B5SDnM4C.js";import"./index-nuYtCEEu.js";import"./dynamic-BLMgMZQd.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./clsx-B-dksMZM.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./browser-Cq8oxhIL.js";import"./utils-DDvzCibx.js";import"./ProgressBar-CB9towVx.js";import"./Hidden-C6qb3gI3.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cq_LhkIy.js";import"./Text-gkToWDQ-.js";import"./EmulatedBoldText-Dp9LuwQf.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Button-CHIFuycL.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./context-BS3tg5wC.js";import"./RSPContexts-Co0_PY2S.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./useStatic-BHJIQiQW.js";import"./FileCardList-BlMAlev1.js";import"./Avatar-CBVDeneG.js";import"./AlertIcon-Dp0ZIISG.js";import"./Image-MnCK3KxN.js";import"./Link-D-pziWbs.js";import"./ControlledNotification-DXpIZWHx.js";import"./Flex-W6EMBjqA.js";import"./Accordion-CLOM0Ma4.js";import"./Alert-Cxybhncd.js";import"./AlertBadge-DOQyDmfm.js";import"./Align-BHiq55io.js";import"./AvatarStack-C1f-7D-W.js";import"./BigNumber-BuA-3GnB.js";import"./Breadcrumb-C2jdHzme.js";import"./Heading-CTEdnBPn.js";import"./Legend-D1sg630U.js";import"./Color-CF3eJFYM.js";import"./TableFooterRow-DSk7Viak.js";import"./SkeletonText-B6gTj_U8.js";import"./Content-DDAGDb2q.js";import"./CounterBadge-CvXy5Oz3.js";import"./DonutChart-DSfM5bil.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DNO1mdVn.js";import"./Header-B5pcUp1F.js";import"./Initials-DltL2xg8.js";import"./InlineCode-HVHT7k08.js";import"./LayoutCard-DG1Z6Pl5.js";import"./Separator-DXJX0Nok.js";import"./MessageSeparator-Byy5sV6o.js";import"./NavigationGroup-Cvtmebaj.js";import"./Notification-BfU9Xz2u.js";import"./NotificationProvider-CPeFG8LD.js";import"./ProgressBar-BH1las8m.js";import"./Rating-CFZ218Cx.js";import"./Skeleton-BBPWZ02g.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
