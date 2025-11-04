import{j as r,r as j}from"./iframe-BGjIo6hw.js";import{u as d,F as u,t as g,a as h}from"./Form-GeAuQ6SE.js";import{B as i}from"./Button-72uC3Xxd.js";import{S as b}from"./Section-TUTyCtZG.js";import{A as E}from"./ActionGroup-hiZS26La.js";import{s as f}from"./Action-DQWGsoks.js";import{A as m,T as l,F as S,O as T}from"./Modal-BYTJ9Y12.js";import{L as a}from"./Label-Bfvc2OEj.js";import"./index-nuYtCEEu.js";import"./dynamic-CxgTiQUL.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./clsx-B-dksMZM.js";import"./index-D8hDUSyP.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./context-DQ8Yy5yO.js";import"./browser-i6k0HuHn.js";import"./utils-FWUTa6bA.js";import"./IconWarning-OiQYEbgz.js";import"./Text-Bc8wJjtt.js";import"./EmulatedBoldText-DcmHRAc9.js";import"./LoadingSpinner-DW7FO3ji.js";import"./Button-DVeyWZob.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./Dialog-DZpgyeVc.js";import"./RSPContexts-BLZAUi5X.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./useStatic-B2rVxKR2.js";import"./context-jnS2Fs_o.js";import"./Popover-tW18rmQX.js";import"./OverlayTrigger-CsYA01So.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./LayoutCard-lfPzieL5.js";import"./Accordion-i0q50_hv.js";import"./Alert-CouJG9of.js";import"./AlertIcon-Dbvw5J6E.js";import"./AlertBadge-CZAc4HrV.js";import"./Align-DZ9lgcQB.js";import"./TableFooterRow-B7GJOO76.js";import"./SkeletonText-BAKl1hQL.js";import"./Avatar-DdlYxgbX.js";import"./AvatarStack-GbEbEW2B.js";import"./Badge-BM2kNOCX.js";import"./BigNumber-D9d1tqLF.js";import"./Breadcrumb-BZd1J0Jr.js";import"./Link-phR0Xn4I.js";import"./Heading-QJXZDrut.js";import"./Legend-w3nuMcY_.js";import"./FileCardList-C4P00gKp.js";import"./Image-DVGepZy_.js";import"./CodeBlock-DANnuUSc.js";import"./CopyButton-DCk4o20_.js";import"./Tooltip-CjugpP2q.js";import"./react-children-utilities-CjDAauZg.js";import"./Color-Dq8hW1_T.js";import"./Content-Dsk5yoIX.js";import"./ContextualHelpTrigger-Dxu_RRLr.js";import"./CounterBadge-CkxONrfP.js";import"./DonutChart-CodRmRtb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfGqCS7W.js";import"./Header-B7fIZl89.js";import"./Initials-Drmk3ion.js";import"./InlineCode-D0p9Y-vu.js";import"./LabeledValue-tPVZUd4m.js";import"./PopoverTrigger-QUfyk5z7.js";import"./Markdown-7KDHmlwn.js";import"./Separator-BnpxR7q2.js";import"./Message-DA1fOBGL.js";import"./MessageSeparator-D5qZufnd.js";import"./NavigationGroup-DCtLktTW.js";import"./Notification-B2wiDs3w.js";import"./NotificationProvider-BdKzz8-L.js";import"./ProgressBar-BCWSFDCi.js";import"./Rating-BnGzKbk4.js";import"./Skeleton-D-2WZNfg.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,se as __namedExportsOrder,me as default};
