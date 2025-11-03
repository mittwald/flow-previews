import{j as r,r as j}from"./iframe-9u6Ufs56.js";import{a as u,u as h,F as d,t as v}from"./Form-Vm8WHD7Z.js";import{L as i}from"./Label-D88lgx7Z.js";import{B as c}from"./Button-_dn7QVPB.js";import{S as f}from"./Section-Czu0clYN.js";import{A as O}from"./ActionGroup-CWJ1NwlO.js";import{s as x}from"./Action-M6Kgfb_M.js";import{q as n,n as e,p as b,F as k}from"./Modal-DRS8W_HN.js";import"./index-nuYtCEEu.js";import"./dynamic-CQrWC-Om.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./clsx-B-dksMZM.js";import"./index-B3MDoUBn.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./browser-BeFavaxk.js";import"./utils-8ZPSUmH_.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e2U-5o25.js";import"./Text-DBIGrc3m.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./useStatic-DAyA5uHy.js";import"./context-C-QTHw1p.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./ControlledNotification-irCIGaEl.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./LayoutCard-rFftX_5x.js";import"./Accordion-B0i5v90U.js";import"./Alert-BQ8YQR_W.js";import"./AlertIcon-C5b9VCt7.js";import"./AlertBadge-CNA6uKSn.js";import"./Align-8__Vbjw2.js";import"./TableFooterRow-B391BAgL.js";import"./SkeletonText-q8x3n-e-.js";import"./Avatar-C2H-R3m6.js";import"./AvatarStack-D6bPCT5Z.js";import"./Badge-CIynJGVc.js";import"./BigNumber-zhac89k-.js";import"./Breadcrumb-6vQEAbHW.js";import"./Link-Brltyk4S.js";import"./Heading-3nkwrjYk.js";import"./Legend-DEpFCRHA.js";import"./FileCardList-BaVbzUxM.js";import"./Image-B9Cscj9i.js";import"./CodeBlock-BiC9piZk.js";import"./CopyButton-B9mW4h-U.js";import"./Tooltip-BKgm2KH6.js";import"./react-children-utilities-B8hFFp2J.js";import"./Color-CZ1w209L.js";import"./Content-De6yv-na.js";import"./ContextualHelpTrigger-nxMOucmM.js";import"./CounterBadge-KUrZxjtT.js";import"./DonutChart-ClsX_6Hx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CMdk7KOR.js";import"./Header-B-ndv2TP.js";import"./Initials-CPfqnq7b.js";import"./InlineCode-RQOLEMSt.js";import"./LabeledValue-B3MQdaw0.js";import"./PopoverTrigger-CUVq5mS7.js";import"./Markdown-AKsw2lGU.js";import"./Separator-BA2h878Y.js";import"./Message-jo39yurl.js";import"./MessageSeparator-DSUYeihd.js";import"./NavigationGroup-C2BtXn54.js";import"./Notification-CrQoxCY-.js";import"./NotificationProvider-DwOg9r8C.js";import"./ProgressBar-DFtsm5DE.js";import"./Rating-DgNl63vx.js";import"./Skeleton-Bq2Z_NYu.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
