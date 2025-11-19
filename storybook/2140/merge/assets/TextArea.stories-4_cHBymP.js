import{j as r,r as F}from"./iframe-ChXgWPPC.js";import{c as p,u as d,F as l,t as j}from"./Form-LmaSyp--.js";import{L as o}from"./Label-BPAVwVMs.js";import{R as h,S as x}from"./ResetButton-C7qHWWdg.js";import{B as u}from"./Button-DdSGnULn.js";import{S as g,s as c}from"./Section-EbTwCLIg.js";import{A as b}from"./ActionGroup-BMrZFOui.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,F as S}from"./Modal-CZyndeHi.js";import"./index-nuYtCEEu.js";import"./dynamic-nfc0SAk9.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./clsx-B-dksMZM.js";import"./index-CUhsAGa6.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./browser-DjrPe_WT.js";import"./utils-DiB9MypO.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BNdWvzeJ.js";import"./Text-B34O2ICL.js";import"./EmulatedBoldText-BEs_gMjx.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./context-7RM43Tkb.js";import"./RSPContexts-T2aOxEw5.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./useStatic-DmmsCa0X.js";import"./FileCardList-C4eHcIg8.js";import"./Avatar-ghljliNz.js";import"./AlertIcon-DTTgmXrL.js";import"./Image-DALWDs5z.js";import"./Link-B12snMlw.js";import"./ControlledNotification-vSaFkeEz.js";import"./Flex-BwGFoWCl.js";import"./Accordion-BSAUPkyO.js";import"./Alert-BVyhkX9T.js";import"./AlertBadge-B7nfqq50.js";import"./Align-CLYk2yCP.js";import"./AvatarStack-36KK9ktO.js";import"./BigNumber-CFSbrkgt.js";import"./Breadcrumb-cvLbQ11O.js";import"./Heading-DMHDZ_u6.js";import"./Legend-DYla4PjT.js";import"./Color-BIUpZZos.js";import"./TableFooterRow-Dnf9rhvN.js";import"./SkeletonText-9oOatj3m.js";import"./Content-BASnjacW.js";import"./CounterBadge-BfruJEd0.js";import"./DonutChart-CVlfJdd5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clt45Y1H.js";import"./Header-Dthqz58G.js";import"./Initials-BRgog33-.js";import"./InlineCode-D5O-E-M9.js";import"./LayoutCard-CyxN8E7I.js";import"./Separator-DHHhirb8.js";import"./MessageSeparator-DBolDfwP.js";import"./NavigationGroup-BwXeVraB.js";import"./Notification-BADXrVSo.js";import"./NotificationProvider-v-2Uz-uV.js";import"./ProgressBar-BUhrPkyu.js";import"./Rating-Bz_0i4Bq.js";import"./Skeleton-DepZBCMx.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await c(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
