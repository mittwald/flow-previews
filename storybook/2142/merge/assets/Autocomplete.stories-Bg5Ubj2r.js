import{j as r,r as g}from"./iframe-ChXgWPPC.js";import{u as c,F as d,t as b,c as h}from"./Form-LmaSyp--.js";import{R as F,S as x}from"./ResetButton-C7qHWWdg.js";import{B as f}from"./Button-DdSGnULn.js";import{S as E,s as u}from"./Section-EbTwCLIg.js";import{A as T}from"./ActionGroup-BMrZFOui.js";import{A as i,T as l,F as B,O as A}from"./Modal-CZyndeHi.js";import{L as a}from"./Label-BPAVwVMs.js";import"./index-nuYtCEEu.js";import"./dynamic-nfc0SAk9.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./clsx-B-dksMZM.js";import"./index-CUhsAGa6.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./browser-DjrPe_WT.js";import"./utils-DiB9MypO.js";import"./IconWarning-BNdWvzeJ.js";import"./Text-B34O2ICL.js";import"./EmulatedBoldText-BEs_gMjx.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./context-7RM43Tkb.js";import"./RSPContexts-T2aOxEw5.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./useStatic-DmmsCa0X.js";import"./FileCardList-C4eHcIg8.js";import"./Avatar-ghljliNz.js";import"./AlertIcon-DTTgmXrL.js";import"./Image-DALWDs5z.js";import"./Link-B12snMlw.js";import"./ControlledNotification-vSaFkeEz.js";import"./Flex-BwGFoWCl.js";import"./Accordion-BSAUPkyO.js";import"./Alert-BVyhkX9T.js";import"./AlertBadge-B7nfqq50.js";import"./Align-CLYk2yCP.js";import"./AvatarStack-36KK9ktO.js";import"./BigNumber-CFSbrkgt.js";import"./Breadcrumb-cvLbQ11O.js";import"./Heading-DMHDZ_u6.js";import"./Legend-DYla4PjT.js";import"./Color-BIUpZZos.js";import"./TableFooterRow-Dnf9rhvN.js";import"./SkeletonText-9oOatj3m.js";import"./Content-BASnjacW.js";import"./CounterBadge-BfruJEd0.js";import"./DonutChart-CVlfJdd5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clt45Y1H.js";import"./Header-Dthqz58G.js";import"./Initials-BRgog33-.js";import"./InlineCode-D5O-E-M9.js";import"./LayoutCard-CyxN8E7I.js";import"./Separator-DHHhirb8.js";import"./MessageSeparator-DBolDfwP.js";import"./NavigationGroup-BwXeVraB.js";import"./Notification-BADXrVSo.js";import"./NotificationProvider-v-2Uz-uV.js";import"./ProgressBar-BUhrPkyu.js";import"./Rating-Bz_0i4Bq.js";import"./Skeleton-DepZBCMx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),p=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(A,{value:t,textValue:t,children:t},t)}),Mr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},n={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})}},m={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
