import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{n as B,o as H,i as S,p as v,q as C}from"./IconWarning-QXks_Kv-.js";import{L as m}from"./Link-DQ9Fv95T.js";import{H as s}from"./HeaderNavigation-rVYxQgVy.js";import{B as o}from"./Button-rH72YzgV.js";import{T as p}from"./Text-VF_oP7nB.js";import{I as L}from"./Image-CR5wxurj.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-CDRUkGAS.js";import{a as b,C as D,M as c}from"./ContextMenuContent-Cp44yHCN.js";import"./ContextMenuSection-CazUyE0l.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-lw9NL9u3.js";import{H as W}from"./Heading-C5oNFXhr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./utils-D0CTRpvX.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Bpd2bwIk.js";import"./Button-BEBevqbU.js";import"./ProgressBar-DPPT7aTs.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./useLabel-BhTOAlCQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";import"./react-children-utilities-DxL90CBS.js";import"./AlertIcon-tK-r7TkC.js";import"./Action-BzpotNjO.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./Popover-LCccCEfa.js";import"./OverlayTrigger-C2ciT0Db.js";import"./Dialog-D2bUbTtQ.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./useOverlayTriggerState-BZ_Sugy1.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-D98NT4gk.js";import"./Switch-PQaaVNbc.js";import"./Label-C3GsNgl3.js";import"./useToggleState-GjA-q7MY.js";import"./useFormReset-Dt6BcYvw.js";import"./Overlay-Cnqr54EC.js";import"./Header-Czinm9Tb.js";import"./ButtonView-BNYYDlgG.js";import"./Heading-BzdgKMPb.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
