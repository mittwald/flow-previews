import{j as r,r as g}from"./iframe-Bro-TRXt.js";import{u as c,F as d,t as b,c as h}from"./Form-RvzTArNv.js";import{R as F,S as x}from"./ResetButton-1YlSfIBY.js";import{B as f}from"./Button-BNo0n626.js";import{S as E,s as u}from"./Section-CKMH18Z5.js";import{A as T}from"./ActionGroup-z-m9HiSR.js";import{A as i,T as l,F as B,O as A}from"./Modal-BAz5qoSA.js";import{L as a}from"./Label-pkq-FNbp.js";import"./index-nuYtCEEu.js";import"./dynamic-DkblynAy.js";import"./flowComponent-CGhBjY7C.js";import"./index-BTAhO2ke.js";import"./clsx-B-dksMZM.js";import"./index-Dv_aaVf5.js";import"./useLocalizedStringFormatter-7nMsqE9H.js";import"./context-oX2aAP76.js";import"./browser-BxJL1VR2.js";import"./utils-D8amqiwx.js";import"./IconWarning-ZXxnaCRz.js";import"./Text-B-OG_Rvj.js";import"./EmulatedBoldText-CJ_mmdOc.js";import"./LoadingSpinner--4B2tKnD.js";import"./Button-DWgdDAXN.js";import"./ProgressBar--uLuv8cx.js";import"./Hidden-B42NMqJG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D0VZgEB2.js";import"./useFocusable-CZGxuR_3.js";import"./context-DwPS9Zpq.js";import"./RSPContexts-Wp0EcsrM.js";import"./Collection-CYc71k62.js";import"./CollectionBuilder-CI1hg_cw.js";import"./SelectionIndicator-D-s_o7Qk.js";import"./Separator-BuskP0K-.js";import"./useStatic-D7gqpLQ0.js";import"./FileCardList-BvhGAyCg.js";import"./Avatar-CpIxO7l4.js";import"./AlertIcon-BdNXmUtu.js";import"./Image-Bz5j-oXf.js";import"./Link-B4JntqcC.js";import"./ControlledNotification-DXrTnOuI.js";import"./Flex-T77zVCqz.js";import"./Accordion-DhsRg8DT.js";import"./Alert-rw15k5_3.js";import"./AlertBadge-BSU1Y84l.js";import"./Align-CRqQdHdC.js";import"./AvatarStack-Hi6fzEFf.js";import"./BigNumber-CuSywnor.js";import"./Breadcrumb-B3OUi1q-.js";import"./Heading-Dja--NLn.js";import"./Legend-BF5dTZhq.js";import"./Color-BbW_7Fl-.js";import"./TableFooterRow-BWpGavXP.js";import"./SkeletonText-C_FVkMiy.js";import"./Content-DoFaAGQT.js";import"./CounterBadge-DnkcQuYH.js";import"./DonutChart-CGXbZnO6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BMKLJb1J.js";import"./Header-BBPSlw9V.js";import"./Initials-DpnqvnKg.js";import"./InlineCode-Cs1b_Cap.js";import"./LayoutCard-DTXM4eOW.js";import"./Separator-CYXscYsC.js";import"./MessageSeparator-D0goDhVZ.js";import"./NavigationGroup-6he7-QRX.js";import"./Notification-C1IUJMls.js";import"./NotificationProvider-BO0E7EIH.js";import"./ProgressBar-Cn62z-v9.js";import"./Rating-DnR4ClCl.js";import"./Skeleton-NzyvVlYM.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),p=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(A,{value:t,textValue:t,children:t},t)}),Mr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},n={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})}},m={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...m.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,m as WithFocus,Nr as __namedExportsOrder,Mr as default};
