import{j as r,r as j}from"./iframe-CVnOevS7.js";import{u as d,F as u,t as g,a as h}from"./Form-BV0DfRKx.js";import{B as i}from"./Button-Cf7B0HY9.js";import{S as b}from"./Section-bMj7sGFO.js";import{A as E}from"./ActionGroup-B3X5o9oq.js";import{s as f}from"./Action-CUQVeG4t.js";import{A as m,T as l,F as S,O as T}from"./Modal-QfU2S1Ru.js";import{L as a}from"./Label-CAmF3EV2.js";import"./index-nuYtCEEu.js";import"./dynamic-DEpoJ_Zh.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./clsx-B-dksMZM.js";import"./index-Cr689PiB.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./context-B1NGcly_.js";import"./browser-DLVk8Qjw.js";import"./utils-CGDhhS2B.js";import"./IconWarning-B_svJUl9.js";import"./Text-Bxez-FPO.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./Dialog-WTjaYKjI.js";import"./RSPContexts-DjbnK2VB.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./useStatic-CGYI-bhE.js";import"./context-CfRoeqvW.js";import"./Popover-DBExu7Vo.js";import"./OverlayTrigger-BkfO43HH.js";import"./ControlledNotification-GhQOL8__.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./LayoutCard-CRc28-ot.js";import"./Accordion-L3zPfCh8.js";import"./Alert-C0tO03bG.js";import"./AlertIcon-DHgwBo_e.js";import"./AlertBadge-BnMe9rDd.js";import"./Align-BLxH_lnh.js";import"./TableFooterRow-C5f7VRCm.js";import"./SkeletonText-Ba9BdoYu.js";import"./Avatar-D3cwiEC5.js";import"./AvatarStack-C8hks35D.js";import"./Badge-ByDbUbxC.js";import"./BigNumber-q4yIW4xK.js";import"./Breadcrumb-DftlKfTG.js";import"./Link-ChTVftws.js";import"./Heading-DfGW7LfL.js";import"./Legend-CYdy4Ftw.js";import"./FileCardList-DxLgTIjd.js";import"./Image-B5CmC758.js";import"./CodeBlock-BdFqEOfx.js";import"./CopyButton-B4NCpX0w.js";import"./Tooltip-Dzxj1hFf.js";import"./react-children-utilities-TDhYNC0Q.js";import"./Color-Ds-Zu7tK.js";import"./Content-BmyMaCIf.js";import"./ContextualHelpTrigger-tU_W7v1d.js";import"./CounterBadge-DTIKZj10.js";import"./DonutChart-DPPXtNJb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CmJ3l5DD.js";import"./Header-SbiS3SyG.js";import"./Initials-CMa8SWiA.js";import"./InlineCode-Bt59bwJI.js";import"./LabeledValue-DKq90b9W.js";import"./PopoverTrigger-kkn5I6qo.js";import"./Markdown-Bx_g-Nsi.js";import"./Separator-BzOj-Dtn.js";import"./Message-BI6CPN5H.js";import"./MessageSeparator-BDDP4jc7.js";import"./NavigationGroup-C6HKSd84.js";import"./Notification-BehsA8rM.js";import"./NotificationProvider-C7mDNPzU.js";import"./ProgressBar-Cz8XcWEU.js";import"./Rating-BhL8l3pQ.js";import"./Skeleton-w_dx-zb1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),me={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const o=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),t=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",children:r.jsxs(m,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:o=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsxs(m,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(S,{children:"ErrorFromOuterFieldError!"}),c(t)]})]})}},p={render:o=>{const e=d(),t=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),c(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
