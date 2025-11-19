import{j as r,r as x}from"./iframe-ChXgWPPC.js";import{c as p,u as c,F as a,t as F}from"./Form-LmaSyp--.js";import{R as l,S as h}from"./ResetButton-C7qHWWdg.js";import{B as d}from"./Button-DdSGnULn.js";import{S as j,s as u}from"./Section-EbTwCLIg.js";import{A as b}from"./ActionGroup-BMrZFOui.js";import{v as t,F as E}from"./Modal-CZyndeHi.js";import"./index-nuYtCEEu.js";import"./dynamic-nfc0SAk9.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./clsx-B-dksMZM.js";import"./index-CUhsAGa6.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./browser-DjrPe_WT.js";import"./utils-DiB9MypO.js";import"./IconWarning-BNdWvzeJ.js";import"./Text-B34O2ICL.js";import"./EmulatedBoldText-BEs_gMjx.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./context-7RM43Tkb.js";import"./RSPContexts-T2aOxEw5.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./useStatic-DmmsCa0X.js";import"./FileCardList-C4eHcIg8.js";import"./Avatar-ghljliNz.js";import"./AlertIcon-DTTgmXrL.js";import"./Image-DALWDs5z.js";import"./Link-B12snMlw.js";import"./ControlledNotification-vSaFkeEz.js";import"./Flex-BwGFoWCl.js";import"./Accordion-BSAUPkyO.js";import"./Alert-BVyhkX9T.js";import"./AlertBadge-B7nfqq50.js";import"./Align-CLYk2yCP.js";import"./AvatarStack-36KK9ktO.js";import"./BigNumber-CFSbrkgt.js";import"./Breadcrumb-cvLbQ11O.js";import"./Heading-DMHDZ_u6.js";import"./Legend-DYla4PjT.js";import"./Color-BIUpZZos.js";import"./TableFooterRow-Dnf9rhvN.js";import"./SkeletonText-9oOatj3m.js";import"./Content-BASnjacW.js";import"./Label-BPAVwVMs.js";import"./CounterBadge-BfruJEd0.js";import"./DonutChart-CVlfJdd5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clt45Y1H.js";import"./Header-Dthqz58G.js";import"./Initials-BRgog33-.js";import"./InlineCode-D5O-E-M9.js";import"./LayoutCard-CyxN8E7I.js";import"./Separator-DHHhirb8.js";import"./MessageSeparator-DBolDfwP.js";import"./NavigationGroup-BwXeVraB.js";import"./Notification-BADXrVSo.js";import"./NotificationProvider-v-2Uz-uV.js";import"./ProgressBar-BUhrPkyu.js";import"./Rating-Bz_0i4Bq.js";import"./Skeleton-DepZBCMx.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
