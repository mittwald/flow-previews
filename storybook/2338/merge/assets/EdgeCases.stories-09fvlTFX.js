import{r as s,j as o}from"./iframe-BcqfzoOA.js";import{M as n}from"./Modal-0HeinRUt.js";import{B as i}from"./Button-C2msjhlA.js";import a from"./Default.stories-CMF2iXlG.js";import{C as c}from"./Content-B5PlHrRz.js";import{S as d}from"./Section-B_QgMIam.js";import{T as l}from"./Text-1XRmWCfn.js";import{A as u}from"./ActionGroup-Cjv-TUqT.js";import{T as x}from"./TextField-DLmieK6n.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-CPq-dFYl.js";import{A as h}from"./ActionBatch-D231mKj-.js";import{L as z}from"./Label-CQjtN3Gn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./utils-Bwp7PlhH.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./context-qhtcW2k7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./Text-CALsrB3x.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./ModalTrigger-B_Sd4CWx.js";import"./OverlayTrigger-CxrHdMrt.js";import"./DialogTriggerView-Zk0Kriq7.js";import"./lib-BeQ81tIU.js";import"./ResetButton--7CtDtWT.js";import"./FieldError-COredAmn.js";import"./FieldError-BECkkLSz.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./useRef-0Ps7frL9.js";import"./browser-CFz57TUe.js";import"./ColumnLayout-DfUqFJib.js";import"./AccentBox-ah6M423O.js";import"./Radio-CusGHNHV.js";import"./useFieldComponent-CSNqGKWj.js";import"./useMakeFocusable-DFtutN-W.js";import"./RadioGroup-Dr8weYjs.js";import"./Form-CTjpA6Q_.js";import"./useFormValidation-BMgNFXni.js";import"./useFormReset-neBkOLPK.js";import"./RadioButton-DnieNuoa.js";import"./DatePicker-AjjyyTny.js";import"./DateInput-CJ3TBHPi.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useSpinButton-Cc2xdZDW.js";import"./useFilter-BCT5iaSQ.js";import"./Popover-lZTmTyt9.js";import"./RangeCalendar-C2ShGKtm.js";import"./Heading-ZbAppe82.js";import"./useUpdateEffect-Cvezv-ns.js";import"./FieldDescription-BAMY7EMv.js";import"./index-DAwbYgR8.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./TextField-KO7DCant.js";import"./useTextField-C_zoOVrm.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./ContextMenuSection-CYrr5VC5.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
