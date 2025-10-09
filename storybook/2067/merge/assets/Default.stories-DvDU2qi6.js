import{j as r}from"./iframe-Dyev7uqQ.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Bsmw3ttA.js";import{L as m}from"./Link-BpkYBbWp.js";import{H as s}from"./HeaderNavigation-DKD6KY8_.js";import{B as o}from"./Button-M1gfFqsi.js";import{T as p}from"./Text-DCNvFKD8.js";import{I as B}from"./Image-Ckz8ZeVS.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DoeO29nw.js";import{C as y,M as c}from"./MenuItem-COrfybuT.js";import{C as A}from"./ContextMenuTrigger-eaVok2vG.js";import"./ContextMenuSection-8BAKg1zJ.js";import{a as D,M as E}from"./Modal-Cn2xNHnC.js";import{H as G}from"./Heading-D12aJeel.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./index-CvZL7rFv.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./utils-xAJ0Toj9.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./dynamic-BE-yoA5C.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ChaPEiup.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./Text-s2lACfdw.js";import"./AlertIcon-BgH9AzDR.js";import"./Action-B4ax4ap7.js";import"./context-C27PnH24.js";import"./useStatic-Bud3ojrW.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./Popover-In9S8XGS.js";import"./useOverlayController-CxtZks11.js";import"./OverlayContextProvider-BeIBMLsK.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./ClearPropsContextView-C8RU8m_f.js";import"./Switch-Cf5lbLNu.js";import"./useMakeFocusable-C9hlV0WZ.js";import"./useToggleState-CN3ThxH0.js";import"./useFormReset-CiUCuSgO.js";import"./OverlayTrigger-C-oGjpLU.js";import"./ControlledNotification-HjFJ5Ljt.js";import"./DialogTriggerView-CKqdZP0W.js";import"./Overlay-DRbnvjOL.js";import"./ButtonView-CMQCxn7k.js";import"./Heading-StBQxI4O.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
