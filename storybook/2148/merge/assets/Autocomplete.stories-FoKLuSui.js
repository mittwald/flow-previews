import{j as r,r as g}from"./iframe-kjkHkmuG.js";import{u as c,F as d,t as b,c as h}from"./Form-Cq355XTY.js";import{R as F,S as x}from"./ResetButton-tTPaRgiQ.js";import{B as f}from"./Button-B7VtDimI.js";import{S as E,s as u}from"./Section-Di6ereWQ.js";import{A as T}from"./ActionGroup-B72bwf7M.js";import{A as i,T as l,F as B,O as A}from"./Modal-0bgB5MJd.js";import{L as a}from"./Label-Ca0botOM.js";import"./index-nuYtCEEu.js";import"./dynamic-BmAGjafL.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./clsx-B-dksMZM.js";import"./index-Ce5Nlxxb.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DKZTM6pY.js";import"./browser-i7jAx1Fh.js";import"./utils-uJ4-NNRC.js";import"./IconWarning-CMakOX5C.js";import"./Text-D4QcDsPt.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Button-CPb8XJRj.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./context-DelhS3-G.js";import"./RSPContexts-1NZhJNvl.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./useStatic-BQelcXwM.js";import"./FileCardList-ByOMDCHV.js";import"./Avatar-C1lRJ6tW.js";import"./AlertIcon-CX0jvCdY.js";import"./Image-DvlLXzm2.js";import"./Link-DZXgz7Xp.js";import"./ControlledNotification-BqK55IK0.js";import"./Flex-CV-Pkpn9.js";import"./Accordion-BfFjMQFD.js";import"./Alert-LMEN0RsN.js";import"./AlertBadge-2LtFU-Ml.js";import"./Align-BH2-KQDB.js";import"./AvatarStack-TOOiI3ZS.js";import"./BigNumber-DN_nWYcY.js";import"./Breadcrumb-BoOjDcq4.js";import"./Heading-C6qiLJW3.js";import"./Legend-YpQaLltb.js";import"./Color-D_EMm2-c.js";import"./TableFooterRow-Dy9Hm7Fq.js";import"./SkeletonText-C_hFxFJ1.js";import"./Content-DOMtlypw.js";import"./CounterBadge-DpRVMejc.js";import"./DonutChart-OsMTrpsW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bso8HKFb.js";import"./Header-BMOLLcii.js";import"./Initials-IMjMZZM4.js";import"./InlineCode-DGV_Qs_a.js";import"./LayoutCard-BdOAhJjJ.js";import"./Separator-DpLhRQNb.js";import"./MessageSeparator-JWDNOqbY.js";import"./NavigationGroup-CNQzbtXt.js";import"./Notification-DusdwtWV.js";import"./NotificationProvider-D3VY9NtU.js";import"./ProgressBar-Dx3EHT7v.js";import"./Rating-hlP75Uf2.js";import"./Skeleton-C4RIhoE3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),p=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(A,{value:t,textValue:t,children:t},t)}),Mr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},n={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})}},m={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
