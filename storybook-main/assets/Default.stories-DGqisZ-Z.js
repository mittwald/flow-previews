import{j as r}from"./iframe-DwZ8STeX.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-dtP1FcGg.js";import{L as m}from"./Link-I7BY8Ydt.js";import{H as s}from"./HeaderNavigation-CuVOupXI.js";import{B as o}from"./Button-DviFkjeq.js";import{T as p}from"./Text-O3JAN1OQ.js";import{I as B}from"./Image-D2YGQwzy.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CfcVnMR7.js";import{C as y,M as c}from"./MenuItem-DA3GePOl.js";import{C as A}from"./ContextMenuTrigger-DgfPF1GW.js";import"./ContextMenuSection-ZF-vqHWD.js";import{a as D,M as E}from"./Modal-TgIhR_Sa.js";import{H as G}from"./Heading-LQ8vefRa.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./utils-7Pnsuj4A.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./dynamic-DhSxKtV5.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DDdNHtRK.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./Text-BcrniBgV.js";import"./AlertIcon-Bxy-cwl_.js";import"./Action-bmScN_4O.js";import"./context-DCjwncLb.js";import"./useStatic-BQF2lsen.js";import"./getActionGroupSlot-CSCOifJo.js";import"./Popover-CfCMVMRC.js";import"./useOverlayController-D87w5C3N.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./Switch-DTkWKSe6.js";import"./useMakeFocusable-BLJfe8lC.js";import"./useToggleState-DonYN7-0.js";import"./useFormReset-DQpyIayp.js";import"./OverlayTrigger-DRZrZrYn.js";import"./ControlledNotification-D5rYnObm.js";import"./DialogTriggerView-CM6tCBPY.js";import"./Overlay-DFg_1h6a.js";import"./ButtonView-B80wrKf2.js";import"./Heading-DjEClEsb.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
