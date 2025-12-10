import{j as r,r as S}from"./iframe-DN0fTWGV.js";import{u as c,F as d,t as b,b as h}from"./Form-Cd1EVhgg.js";import{R as F,S as x}from"./ResetButton-D9YSKTTf.js";import{B as f}from"./Button-uApu6GnY.js";import{S as E,s as u}from"./Section-Bae4yUtt.js";import{A as T}from"./ActionGroup-D2BuDihe.js";import{c as i,T as l,g as B,O as y}from"./TimeField-DXpzyGzy.js";import{L as p}from"./Label-C802sjtx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bg-k1EYj.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./context-_fNSffOv.js";import"./browser-BG2zS4gf.js";import"./utils-KHZtdcQs.js";import"./IconWarning-Cuf61xud.js";import"./Text-CLTzTYkM.js";import"./EmulatedBoldText-CdlTcGoA.js";import"./LoadingSpinner-CRqVu2d-.js";import"./Button-BqbeFKAl.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./context-DUBN3HgP.js";import"./RSPContexts-CXdzH5Rq.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./useStatic-DA5kar0v.js";import"./Accordion-D7yLcWFC.js";import"./Alert-Cpd-iuOs.js";import"./AlertIcon-D_t13U1R.js";import"./AlertBadge-Hr_oCvhM.js";import"./Align-DuJPe5gd.js";import"./Popover-oDqr7Nfr.js";import"./OverlayTrigger-BxicfPZ1.js";import"./TableFooterRow-RSgQDu1E.js";import"./SkeletonText-Fk8yZXsj.js";import"./Avatar-CjhgWUJl.js";import"./AvatarStack-DiMUC231.js";import"./Badge-B4N4pUOv.js";import"./BigNumber-Yl5a57NA.js";import"./Breadcrumb-YEGx-rGQ.js";import"./Link-DbZd-iVz.js";import"./Heading-DYEbRjlj.js";import"./Legend-DiZllTBb.js";import"./FileCardList-CA73fY06.js";import"./Image-ncn48exK.js";import"./Color-Chwd73Rj.js";import"./Content-Dl1qh6D4.js";import"./ContextualHelpTrigger-CRucrJit.js";import"./CounterBadge-D53nik_y.js";import"./DonutChart-BUm4qe-w.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-9SL9RU8e.js";import"./Header-DvHWDufz.js";import"./Initials-BnQ1LCtT.js";import"./InlineCode-ByOVybOd.js";import"./PopoverTrigger-DKN0Zj2F.js";import"./Separator-2AMI3M16.js";import"./Message-CpojsH-c.js";import"./MessageSeparator-B3ufFzYX.js";import"./NavigationGroup-CQIW4w3C.js";import"./Notification-Bk6cogWg.js";import"./NotificationProvider-Bs-kRf48.js";import"./ProgressBar-iA_T9LR7.js";import"./Rating-DCK456Gd.js";import"./Skeleton-g2Cf08Rc.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,zr as __namedExportsOrder,Yr as default};
