import{j as r,r as j}from"./iframe-Dld40DlB.js";import{u as d,F as u,t as g,a as h}from"./Form-vOopptf9.js";import{B as i}from"./Button-DIo8wcxN.js";import{S as b}from"./Section-D4-3IMps.js";import{A as E}from"./ActionGroup-BphLBlE9.js";import{s as f}from"./Action-BpHcMUnj.js";import{A as m,T as l,F as S,O as T}from"./Modal-BGl6IXQ3.js";import{L as a}from"./Label-B7H6jTM3.js";import"./index-nuYtCEEu.js";import"./dynamic-DLhXud-a.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./clsx-B-dksMZM.js";import"./index-CruVUoMH.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./context-CvXLvg4O.js";import"./browser-bPFV2Ji3.js";import"./utils-D4Q7WLr3.js";import"./IconWarning-Bslq8B7t.js";import"./Text-TesoHDfv.js";import"./EmulatedBoldText-Df4Xti5W.js";import"./LoadingSpinner-C26eHY8y.js";import"./Button-rvCZddFR.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./Dialog-BJVHvNg4.js";import"./RSPContexts-DRmXF-Vp.js";import"./OverlayArrow-J381LXSg.js";import"./useControlledState-BaXUyl3S.js";import"./Collection-BcdNyWqm.js";import"./CollectionBuilder-DXJ4p0H3.js";import"./SelectionIndicator-B4HmttaN.js";import"./Separator-DQHCwqOC.js";import"./getActionGroupSlot-DKSLC32H.js";import"./useStatic-C-DsDLNz.js";import"./context-DLHVmjQX.js";import"./Popover-XDo3MRMz.js";import"./OverlayTrigger-BVUj_QQK.js";import"./ControlledNotification-xf49NdLG.js";import"./ClearPropsContextView-Cho7uRH3.js";import"./LayoutCard-IMl7pf0m.js";import"./Accordion-H2q-twcf.js";import"./Alert-CVS5nIOt.js";import"./AlertIcon-CxtEeq0v.js";import"./AlertBadge-Do9Ij39K.js";import"./Align-Bfd8WAYD.js";import"./TableFooterRow-e3hxtKbE.js";import"./SkeletonText-KItJqAsI.js";import"./Avatar-BxdFEafq.js";import"./AvatarStack-L4BJfetb.js";import"./Badge-DbOHK1xn.js";import"./BigNumber-ChxB-lTV.js";import"./Breadcrumb-BExRUgBv.js";import"./Link-Henk7h9t.js";import"./Heading-BAwA_6k1.js";import"./Legend-OzUmegYt.js";import"./FileCardList-C7wc0e9o.js";import"./Image-sQRjHzgr.js";import"./CodeBlock-C93BO0Az.js";import"./CopyButton-wzex5dN6.js";import"./Tooltip-Cbpl3jQW.js";import"./react-children-utilities-Dtb1FnZ8.js";import"./Color-BciKfqSt.js";import"./Content-DhIy2dEF.js";import"./ContextualHelpTrigger-B-SoQJrr.js";import"./CounterBadge-Blg6w3Fx.js";import"./DonutChart-B36Knnf8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGmRgtWI.js";import"./Header-BAt7i-pe.js";import"./Initials-Btu9tAbd.js";import"./InlineCode-y_TJhLt6.js";import"./LabeledValue-UBM9yNK9.js";import"./PopoverTrigger-BYqjO8bC.js";import"./Markdown-C7mhQjBr.js";import"./Separator-HwrAv7Ne.js";import"./Message-BRMGC2b4.js";import"./MessageSeparator-B4jPz4Lc.js";import"./NavigationGroup-Bm8cGBg1.js";import"./Notification-Cb6Pnxnq.js";import"./NotificationProvider-BqpDejop.js";import"./ProgressBar-D0XE8XVg.js";import"./Rating-gEDdyBiO.js";import"./Skeleton-HkK15y9K.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
