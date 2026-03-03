import{r as s,j as o}from"./iframe-BZ1p44Xs.js";import{M as n}from"./Modal-hb6flPm1.js";import{B as i}from"./Button-BXzJaHaH.js";import a from"./Default.stories-C-d-ftjL.js";import{C as c}from"./Content-DuDYFNBO.js";import{S as d}from"./Section-DYkPYl1t.js";import{T as l}from"./Text-CplKG2wk.js";import{A as u}from"./ActionGroup-D6AJDGA7.js";import{T as x}from"./TextField-WCja-bxL.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-DAuGI7Cj.js";import{A as h}from"./ActionBatch-kp--iEDz.js";import{L as z}from"./Label-HK0aVnMe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./utils-Cc2PUaBi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./context-C5KsUqFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./ModalTrigger-fuSXM19l.js";import"./OverlayTrigger-DzQUlxLA.js";import"./DialogTriggerView-p9c1x_E0.js";import"./lib-D7rmiKQu.js";import"./ResetButton-BCpb_Ry0.js";import"./FieldError-t823MHuJ.js";import"./FieldError-DP4FZd0x.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";import"./ActionGroupView-CiGsVH-s.js";import"./useRef-Cx2IQloG.js";import"./browser-N7XS9wRL.js";import"./ColumnLayout-BCB7DSmP.js";import"./AccentBox-C9jr6Kaf.js";import"./Radio-CUhBRlpi.js";import"./useFieldComponent-CdmiPNAX.js";import"./useMakeFocusable-CAYofKPa.js";import"./RadioGroup-BvxJi_vc.js";import"./Form-Lw3Ehme-.js";import"./useFormValidation-oY9u4Y5a.js";import"./useFormReset-zSbsyNkN.js";import"./RadioButton-BiPbk2q4.js";import"./DatePicker-BeIMG2lC.js";import"./DateInput-B_8KCsIr.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useSpinButton-BtppQm-i.js";import"./useFilter-BuFHaQpv.js";import"./Popover-CWPz-1RW.js";import"./RangeCalendar-vMywpQC0.js";import"./Heading-acaQddxn.js";import"./useUpdateEffect-ZQ327Y3P.js";import"./FieldDescription-PY5u12Fd.js";import"./index-DmOIU4fy.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./TextField-BFG4RQnU.js";import"./useTextField-CmQ5R2lB.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-D6uph6L1.js";import"./ContextMenuSection-FMJg67QM.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isDefaultOpen>
        <Heading>{dummyText.short}</Heading>
        <Content>
          <Section>
            {size === "s" && <Text>{dummyText.long}</Text>}
            {size === "m" && <TextField>
                <Label>{dummyText.short}</Label>
              </TextField>}

            <Button onPress={() => setSize(size === "s" ? "m" : "s")}>
              Change size
            </Button>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeModal>
            <Button color="accent">Create customer</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>;
  }
}`,...r.parameters?.docs?.source}}};const at=["SizeChange"];export{r as SizeChange,at as __namedExportsOrder,nt as default};
