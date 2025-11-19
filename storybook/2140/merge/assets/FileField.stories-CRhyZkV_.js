import{j as r,r as x}from"./iframe-ChXgWPPC.js";import{c as l,u as a,F as c,t as j}from"./Form-LmaSyp--.js";import{L as s}from"./Label-BPAVwVMs.js";import{R as p,S as d}from"./ResetButton-C7qHWWdg.js";import{B as t}from"./Button-DdSGnULn.js";import{S,s as u}from"./Section-EbTwCLIg.js";import{A as b}from"./ActionGroup-BMrZFOui.js";import{s as m,F as B}from"./Modal-CZyndeHi.js";import"./index-nuYtCEEu.js";import"./dynamic-nfc0SAk9.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./clsx-B-dksMZM.js";import"./index-CUhsAGa6.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./browser-DjrPe_WT.js";import"./utils-DiB9MypO.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BNdWvzeJ.js";import"./Text-B34O2ICL.js";import"./EmulatedBoldText-BEs_gMjx.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./context-7RM43Tkb.js";import"./RSPContexts-T2aOxEw5.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./useStatic-DmmsCa0X.js";import"./FileCardList-C4eHcIg8.js";import"./Avatar-ghljliNz.js";import"./AlertIcon-DTTgmXrL.js";import"./Image-DALWDs5z.js";import"./Link-B12snMlw.js";import"./ControlledNotification-vSaFkeEz.js";import"./Flex-BwGFoWCl.js";import"./Accordion-BSAUPkyO.js";import"./Alert-BVyhkX9T.js";import"./AlertBadge-B7nfqq50.js";import"./Align-CLYk2yCP.js";import"./AvatarStack-36KK9ktO.js";import"./BigNumber-CFSbrkgt.js";import"./Breadcrumb-cvLbQ11O.js";import"./Heading-DMHDZ_u6.js";import"./Legend-DYla4PjT.js";import"./Color-BIUpZZos.js";import"./TableFooterRow-Dnf9rhvN.js";import"./SkeletonText-9oOatj3m.js";import"./Content-BASnjacW.js";import"./CounterBadge-BfruJEd0.js";import"./DonutChart-CVlfJdd5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clt45Y1H.js";import"./Header-Dthqz58G.js";import"./Initials-BRgog33-.js";import"./InlineCode-D5O-E-M9.js";import"./LayoutCard-CyxN8E7I.js";import"./Separator-DHHhirb8.js";import"./MessageSeparator-DBolDfwP.js";import"./NavigationGroup-BwXeVraB.js";import"./Notification-BADXrVSo.js";import"./NotificationProvider-v-2Uz-uV.js";import"./ProgressBar-BUhrPkyu.js";import"./Rating-Bz_0i4Bq.js";import"./Skeleton-DepZBCMx.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
